import React, { useState, useContext } from 'react'
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { LoadingSpinner } from "./LoadingSpinner";
import * as RNLocalize from "react-native-localize";
import {ThemeContext, themes as styles} from '../theme/ThemeContext';
import{ fetchJoke } from '../service/JokeService'

const staticPresentImage = require("./images/cadeau.png");

export function Home({navigation}){
    const [joke, setJoke] = useState('');
    const [isLoading, setLoading] = useState(false);

    let jokeDiv;
    if(joke.error == true){
        jokeDiv = <Text style={styles.jokeText}>{joke.message}</Text>
    } else {
        if(joke.type === "twopart"){
            jokeDiv = (<><Text style={styles.jokeText}>{joke.setup}</Text><Text style={styles.jokeText}>{joke.delivery}</Text></>);
        } else if(joke.type === "single"){
            jokeDiv = <Text style={styles.jokeText}>{joke.joke}</Text>;
        }
    }
    return(
        <View style={styles.container}>
            {isLoading ? <LoadingSpinner /> :
                <View style={styles.jokeContainer}>
                    {jokeDiv}
                </View>
            }
            <View style={styles.buttonContainer}>
                <Pressable style={[styles.greenButton, styles.alignCenter]} onPress={()=> fetchJoke(setJoke, setLoading, RNLocalize.getCountry().toLowerCase())}>
                     <Text style={styles.buttonText}>Generate Joke</Text>
                </Pressable>
                <Pressable style={[styles.greenButton, styles.alignBottom]} onPress={()=> navigation.navigate('CounterPage')}>
                    <Image source={staticPresentImage}/>
                </Pressable>
                <Pressable style={[styles.greenButton, styles.alignBottom]} onPress={()=> navigation.navigate('Location')}>
                    <Text style={styles.buttonText}>Localisation</Text>
                </Pressable>
            </View>
        </View>
    )
}
