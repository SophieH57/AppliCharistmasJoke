import { View, Text, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import { ThemeContext, themes as styles } from '../theme/ThemeContext';
import { LoadingSpinner } from "./LoadingSpinner";
import { FlyDistanceCalcul } from '../service/FlyDistanceCalcul';
import useGeolocation from '../hooks/useGeolocation';

export function LocationPage({ navigation }) {

  const [distance, setDistance] = useState();
  const { location } = useGeolocation();

  const coordonneesLaponie = {
    latitude: 67.9222,
    longitude: 26.5046
  }

  useEffect(() => {
    if (location)
      setDistance(FlyDistanceCalcul(location.coords.latitude, location.coords.longitude, coordonneesLaponie.latitude, coordonneesLaponie.longitude).toFixed(1))
  }, [location]);

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
