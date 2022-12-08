import { View, Text, Pressable, PermissionsAndroid } from 'react-native';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import {ThemeContext, themes as styles} from '../theme/ThemeContext';
import { LoadingSpinner } from "./LoadingSpinner";
import Geolocation from 'react-native-geolocation-service';

export function LocationPage({ navigation }) {

    const [location, setLocation] = useState(false);
    const [distance, setDistance] = useState();

    const coordonneesLaponie = {
        latitude: 67.9222,
        longitude: 26.5046
    }

    // Function to get permission for location
const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  // function to check permissions and get Location
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            setLocation(position);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
  };

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

    useEffect(() => {
        if (location)
            setDistance(flyDistanceBeetweenTwoPoints(location.coords.latitude, location.coords.longitude, coordonneesLaponie.latitude, coordonneesLaponie.longitude).toFixed(1));
    }, [location]);



    return (
        <>
            <View style={styles.container}>
                {location ? <Text style={styles.whiteText}>Santa is at {distance} kms from you </Text> : <LoadingSpinner></LoadingSpinner>}
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
                <Pressable style={[styles.greenButton, styles.alignBottom]} onPress={() => getLocation()} ><Text>Where is Santa ?</Text>
                </Pressable>
                <Pressable style={[styles.greenButton, styles.alignBottom]} onPress={() => navigation.navigate('Home')} >
                    <Text style={styles.buttonText}>Back</Text>
                </Pressable>
            </View>
        </>
    )
}
