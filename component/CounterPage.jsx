import React from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import {themes as styles} from '../theme/ThemeContext';
import useCountDownDays from '../utils/useCountDownDays';
import useLanguage from '../utils/useLanguage';
import * as RNLocalize from 'react-native-localize';

const staticSpruceImage = require('./images/sapin.png');
const christmasDate = new Date(new Date().getFullYear(), "11", "25");

export function CounterPage({navigation}) {
  const {selectedLanguage} = useLanguage(RNLocalize.getCountry().toLowerCase());
  const {days} = useCountDownDays(christmasDate);

  return (
    <View style={styles.container}>
      <View style={styles.countDownContainer}>
        <Text style={styles.whiteText}>{selectedLanguage.words.daysBeforeChristmas.replace("{0}", days)}</Text>
        <View style={styles.imgContainer}>
          <Image style={styles.spruceImg} source={staticSpruceImage} />
        </View>
        <Pressable
          style={[styles.greenButton, styles.alignCenter]}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>{selectedLanguage.words.backButton}</Text>
        </Pressable>
      </View>
    </View>
  );
}
