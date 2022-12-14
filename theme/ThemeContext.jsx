import React from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
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
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
  },
  greenButton: {
    fontSize: 20,
    color: '#ffffff',
    backgroundColor: '#6daf4e',
    padding: 15,
    borderRadius: 15,
    justifyContent: 'center',
    elevation: 3,
    marginVertical: 5,
    width: '50%',
  },
  jokeContainer: {
    flex: 2,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  countDownContainer: {
    flex: 1,
    alignItems: 'center',
  },
  jokeText: {
    fontSize: 20,
    color: '#ffffff',
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    paddingHorizontal: 10,
    marginBottom: 100,
  },
  whiteText: {
    fontSize: 20,
    color: '#ffffff',
    fontFamily: 'Montserrat-SemiBold',
    paddingHorizontal: 10,
    marginTop: 100,
  },
  imgContainer: {
    flex: 1,
    padding: 70,
  },
  spruceImg: {
    flex: 1,
    aspectRatio: 1.5,
    resizeMode: 'contain',
  },
  santaText:{
    marginBottom: 200,
    textAlign: 'center',
  }
};

export const ThemeContext = React.createContext(
  themes, // default value
);
