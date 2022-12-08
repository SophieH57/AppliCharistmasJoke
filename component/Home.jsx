import React, { useState } from 'react'
import { StyleSheet, Pressable, View, Text } from "react-native";

const greenButton = {
    fontSize: 20,
        color: "#ffffff",
        backgroundColor: "#6daf4e",
        padding: 15,
        borderRadius: 15
}

export function Home({navigation}){
    const [joke, setJoke] = useState('');

    function fetchJoke() {
      alert('Hello!');
    }

    useState(() => {

    })

    return(
        <View style={styles.container}>
            <Text style={styles.jokeText}>{joke}</Text>
            <Pressable style={[styles.greenButton, styles.alignCenter]} onPress={()=> fetchJoke()}>
                <Text style={styles.buttonText}>Generate Joke</Text>
            </Pressable>
            <Pressable style={[styles.greenButton, styles.alignBottom]} onPress={()=> navigation.navigate('CounterPage')}>
                <Text style={styles.buttonText}>Cadeau</Text>
            </Pressable>
            <Pressable style={[styles.greenButton, styles.alignBottom]} onPress={()=> navigation.navigate('Location')}>
                <Text style={styles.buttonText}>Localisation</Text>
            </Pressable>
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
    color: "#ffffff"
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
    textAlign: 'center',
  }
});