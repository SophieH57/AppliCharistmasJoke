import React, {useState} from 'react';
import * as RNLocalize from 'react-native-localize';

export default function useLanguage() {
  const selectedLanguage = lang[RNLocalize.getCountry().toLowerCase()];
  if (!selectedLanguage) {
    setSelectedLanguage(lang.languages["en"]);
  }
  return selectedLanguage;
}

export const lang = {
  en: {
    generateButton: 'Generate Joke',
    backButton: 'Back',
    whereIsSantaButton: 'Where is Santa',
    distanceSanta: 'Santa is at {0} kms from you',
    daysBeforeChristmas: '{0} days before Christmas',
  },
  us: {
    generateButton: 'Generate Joke',
    backButton: 'Back',
    whereIsSantaButton: 'Where is Santa',
    distanceSanta: 'Santa is at {0} kms from you',
    daysBeforeChristmas: '{0} days before Christmas',
  },
  fr: {
    generateButton: 'Generer Blague',
    backButton: 'Retour',
    whereIsSantaButton: 'Ou est le Pere Noel',
    distanceSanta: 'Le Pere Noel est a {0} kms de vous',
    daysBeforeChristmas: '{0} jours restant avant Noel',
  },
};
