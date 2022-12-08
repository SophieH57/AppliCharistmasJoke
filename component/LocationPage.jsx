import { View, Text, Pressable } from 'react-native';
import GetLocation from 'react-native-get-location';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export function LocationPage({ navigation }) {

    const [location, setLocation] = useState();
    const [distance, setDistance] = useState();

    const coordonneesLaponie = {
        latitude: 67.9222,
        longitude: 26.5046
    }

    //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
    function flyDistanceBeetweenTwoPoints(lat1, lon1, lat2, lon2) {
        var R = 6371; // km
        var dLat = toRad(lat2 - lat1);
        var dLon = toRad(lon2 - lon1);
        var lat1 = toRad(lat1);
        var lat2 = toRad(lat2);

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    }

    // Converts numeric degrees to radians
    function toRad(Value) {
        return Value * Math.PI / 180;
    }


    GetLocation.getCurrentPosition({
        enableHighAccuracy: false,
        timeout: 3000,
    })
        .then(location => {
            console.log(location);
            setLocation(location);
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        })

    useEffect(() => {
        if (location)
            setDistance(flyDistanceBeetweenTwoPoints(location.latitude, location.longitude, coordonneesLaponie.latitude, coordonneesLaponie.longitude).toFixed(1));
    }, [location]);



    return (
        <>
            <View style={styles.container}>
                {location ? <Text>Le père Noël est à {distance} kms de vous </Text> : <Text>Loading...</Text>}
                {/* <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                /> */}
                <Pressable style={[styles.greenButton, styles.alignBottom]} onPress={() => navigation.navigate('Home')} >
                    <Text style={styles.buttonText}>Back</Text>
                </Pressable>
            </View>


        </>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        alignItems: 'center',
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        // alignSelf: 'stretch',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',

    },
    jokeText: {
        fontSize: 20,
        color: "#ffffff"
    },
    greenButton: {
        fontSize: 20,
        color: "#ffffff",
        backgroundColor: "#6daf4e",
        padding: 15,
        borderRadius: 15,
        justifyContent: 'center',
        elevation: 3,
        marginVertical: 5
    },
    alignBottom: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    alignCenter: {
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        textAlign: 'center',
    },
    map: {
        // ...StyleSheet.absoluteFillObject,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
});