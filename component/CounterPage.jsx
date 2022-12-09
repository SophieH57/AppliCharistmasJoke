import React from 'react'
import { Image, View, Text, Pressable } from "react-native";
import { themes as styles } from '../theme/ThemeContext';
import useCountDownDays from "../utils/useCountDownDays"

const staticSpruceImage = require("./images/sapin.png");
const christmasDate = '2022-12-25';

export function CounterPage({ navigation }) {
    const {days} = useCountDownDays(christmasDate);

    return (
        <View style={styles.container}>
            <View style={styles.countDownContainer}>
                <Text style={styles.whiteText}>{days} days before Christmas !</Text>
                <View style={styles.imgContainer}>
                    <Image style={styles.spruceImg} source={staticSpruceImage} />
                </View>
                <Pressable style={[styles.greenButton, styles.alignCenter]} onPress={() => navigation.navigate('Home')} >
                    <Text style={styles.buttonText}>Back</Text>
                </Pressable>
            </View>
        </View>
    )
}