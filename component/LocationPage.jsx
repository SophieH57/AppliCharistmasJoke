import { View, Text, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext, themes as styles } from '../theme/ThemeContext';
import { LoadingSpinner } from "./LoadingSpinner";
import { locationService } from '../service/LocationService';

export function LocationPage({ navigation }) {

  const [location, setLocation] = useState(false);
  const [distance, setDistance] = useState();

  const coordonneesLaponie = {
    latitude: 67.9222,
    longitude: 26.5046
  }

  useEffect(() => {
    location ?
      setDistance(flyDistanceBeetweenTwoPoints(location.coords.latitude, location.coords.longitude, coordonneesLaponie.latitude, coordonneesLaponie.longitude).toFixed(1))
      : locationService(setLocation);
  }, [location]);

  // Function to get permission for location
  // const requestLocationPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       {
  //         title: 'Geolocation Permission',
  //         message: 'Can we access your location?',
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OK',
  //       },
  //     );
  //     console.log('granted', granted);
  //     if (granted === 'granted') {
  //       console.log('You can use Geolocation');
  //       return true;
  //     } else {
  //       console.log('You cannot use Geolocation');
  //       return false;
  //     }
  //   } catch (err) {
  //     return false;
  //   }
  // };

  // function to check permissions and get Location
  // const getLocation = () => {
  //   const result = requestLocationPermission();
  //   result.then(res => {
  //     console.log('res is:', res);
  //     if (res) {
  //       Geolocation.getCurrentPosition(
  //         position => {
  //           console.log(position);
  //           setLocation(position);
  //         },
  //         error => {
  //           // See error code charts below.
  //           console.log(error.code, error.message);
  //           setLocation(false);
  //         },
  //         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
  //       );
  //     }
  //   });
  // };

  //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
  function flyDistanceBeetweenTwoPoints(lat1, lon1, lat2, lon2) {
    let R = 6371; // km
    let dLatRadian = toRad(lat2 - lat1);
    let dLonRadian = toRad(lon2 - lon1);
    let lat1Radian = toRad(lat1);
    let lat2Radian = toRad(lat2);

    let a = Math.sin(dLatRadian / 2) * Math.sin(dLatRadian / 2) +
      Math.sin(dLonRadian / 2) * Math.sin(dLonRadian / 2) * Math.cos(lat1Radian) * Math.cos(lat2Radian);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    return d;
  }

  // Converts numeric degrees to radians
  function toRad(Value) {
    return Value * Math.PI / 180;
  }




  return (
    <>
      <View style={styles.container}>
        {location ? <Text style={styles.whiteText}>Santa is at {distance} kms from you </Text> : <LoadingSpinner></LoadingSpinner>}
        <Pressable style={[styles.greenButton, styles.alignBottom]} onPress={() => navigation.navigate('Home')} >
          <Text style={styles.buttonText}>Back</Text>
        </Pressable>
      </View>
    </>
  )
}
