import React from 'react'

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
             color: "#ffffff",
             backgroundColor: "#6daf4e",
             padding: 15,
             borderRadius: 15,
             justifyContent: 'center',
             elevation: 3,
             marginVertical: 5
           },
           container: {
               flex:1,
               alignItems:'center',
               justifyContent:'center',
               alignSelf:'stretch'
             },
             jokeText: {
               fontSize: 20,
               color: "#ffffff",
               fontFamily: 'Montserrat-SemiBold',
               paddingHorizontal: 10,
               marginBottom: 100
             },
             countDownText: {
                              fontSize: 20,
                              color: "#ffffff",
                              fontFamily: 'Montserrat-SemiBold',
                              paddingHorizontal: 10,
                              marginTop: 100
                            },
             spruceImg:{
                flex: 1,
                aspectRatio: 1.5,
                resizeMode: 'contain',
             }
};

export const ThemeContext = React.createContext(
  themes // default value
);