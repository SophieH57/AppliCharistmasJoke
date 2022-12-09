import { View, Text, Pressable, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { ThemeContext, themes as styles } from '../theme/ThemeContext';
import { LoadingSpinner } from "./LoadingSpinner";
import { FlyDistanceCalcul } from '../service/FlyDistanceCalcul';
import useLanguage from '../utils/useLanguage';
import * as RNLocalize from 'react-native-localize';
import useGeolocation from '../utils/useGeolocation';

export function LocationPage({ navigation }) {

  const { selectedLanguage } = useLanguage(RNLocalize.getCountry().toLowerCase());
  const [distance, setDistance] = useState();
  const { location } = useGeolocation();
  const santaImage = require('./images/santa_white.png');

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
        <View style={styles.countDownContainer}>
          <View style={styles.imgContainer}>
            <Image style={styles.spruceImg} source={santaImage} />
          </View>
          {location ? <Text style={[styles.whiteText, styles.santaText]}>Santa is at {distance} kms from you </Text> : <LoadingSpinner ></LoadingSpinner>}
          <Pressable
            style={[styles.greenButton, styles.alignCenter]}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>{selectedLanguage.words.backButton}</Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}
