import React, { useState } from 'react'
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { LoadingSpinner } from "./LoadingSpinner";

const greenButton = {
    fontSize: 20,
        color: "#ffffff",
        backgroundColor: "#6daf4e",
        padding: 15,
        borderRadius: 15
}

const staticPresentImage = require("./images/cadeau.png");

export function Home({navigation}){
    const [joke, setJoke] = useState('');
    const [isLoading, setLoading] = useState(false);

    const fetchJoke = async () => {
          try {
            setLoading(true);
            const response = await fetch('https://v2.jokeapi.dev/joke/christmas');
            const json = await response.json();
            setJoke(json);
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
        };

    useState(() => {

    })

    return(
        <View style={styles.container}>
            {isLoading ? <LoadingSpinner /> :
                <View style={styles.jokeContainer}>
                    <Text style={styles.jokeText}>{joke.setup}</Text>
                    <Text style={styles.jokeText}>{joke.delivery}</Text>
                </View>
            }
            <View style={styles.buttonContainer}>
                <Pressable style={[styles.greenButton, styles.alignCenter]} onPress={()=> fetchJoke()}>
                     <Text style={styles.buttonText}>Generate Joke</Text>
                </Pressable>
                <Pressable style={[styles.greenButton, styles.alignBottom]} onPress={()=> navigation.navigate('CounterPage')}>
                    <Image source={staticPresentImage}/>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
  }
});