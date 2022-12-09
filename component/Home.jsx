import React, {useState} from 'react';
import {Image, Pressable, View, Text} from 'react-native';
import {LoadingSpinner} from './LoadingSpinner';
import * as RNLocalize from 'react-native-localize';
import {themes as styles} from '../theme/ThemeContext';
import {fetchJoke} from '../service/JokeService';
import JokeDivComponent from './JokeDivComponent';
import useLanguage from '../utils/useLanguage';

const staticPresentImage = require('./images/cadeau.png');

export function Home({navigation}) {
  const selectedLanguage = useLanguage();
  const [joke, setJoke] = useState('');
  const [isLoading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.jokeContainer}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <JokeDivComponent joke={joke}></JokeDivComponent>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.greenButton, styles.alignCenter]} onPress={() => fetchJoke( setJoke, setLoading, RNLocalize.getCountry().toLowerCase())}>
          <Text style={styles.buttonText}>{selectedLanguage.generateButton}</Text>
        </Pressable>
        <Pressable style={[styles.greenButton, styles.alignBottom]} onPress={() => navigation.navigate('CounterPage')}>
          <Image source={staticPresentImage} />
        </Pressable>
        <Pressable style={[styles.greenButton, styles.alignBottom]} onPress={() => navigation.navigate('Location')}>
          <Text style={styles.buttonText}>{selectedLanguage.whereIsSantaButton}</Text>
        </Pressable>
      </View>
    </View>
  );
}
