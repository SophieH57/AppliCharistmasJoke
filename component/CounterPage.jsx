import React, { useState } from 'react'
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { ThemeContext, themes as styles } from '../theme/ThemeContext';

import dayjs, { to } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.guess()

const christmasDate = '2022-12-25';
const refreshEachDay = 86400000;
const staticSpruceImage = require("./images/sapin.png");

export function CounterPage({ navigation }) {
    const [days, setDays] = useState('0');

    const getCountDownTime = (() => {
        const today = dayjs.utc().local().format();
        setDays(dayjs(christmasDate).diff(today, 'day'));
    });

    useState(() => {
        getCountDownTime()
        setInterval(() => { getCountDownTime() }, refreshEachDay);
    })

    return (
        <View style={styles.container}>
            <Text style={styles.whiteText}>{days} days before Christmas !</Text>
            <Image style={styles.spruceImg} source={staticSpruceImage} />
            <Pressable style={[styles.greenButton, styles.alignCenter]} onPress={() => navigation.navigate('Home')} >
                <Text style={styles.buttonText}>Back</Text>
            </Pressable>
        </View>
    )
}