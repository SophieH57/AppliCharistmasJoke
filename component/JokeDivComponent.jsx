import React from 'react';
import { themes as styles } from '../theme/ThemeContext';
import { Text } from "react-native";

export default function JokeDivComponent(props) {
    let jokeDiv;
    if (props.joke.error == true) {
        jokeDiv = <Text style={styles.jokeText}>{props.joke.message}</Text>
    } else {
        if (props.joke.type === "twopart") {
            jokeDiv = (<><Text style={styles.jokeText}>{props.joke.setup}</Text><Text style={styles.jokeText}>{props.joke.delivery}</Text></>);
        } else if (props.joke.type === "single") {
            jokeDiv = <Text style={styles.jokeText}>{props.joke.joke}</Text>;
        }
    }
  return jokeDiv;
}