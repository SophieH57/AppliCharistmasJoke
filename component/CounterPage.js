import React, { useState } from 'react'
import { StyleSheet, View, Text, Pressable } from "react-native";

import dayjs, { to } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.guess()

const christmasDate = '2022-12-25';
const refreshEachDay = 86400000;

export function CounterPage({navigation}){
    const[days, setDays] = useState('0');

    const getCountDownTime = (() => {
        const today = dayjs.utc().local().format();
        setDays(dayjs(christmasDate).diff(today, 'day'));
    });

    useState(() => {
        getCountDownTime()
        setInterval(() => { getCountDownTime() }, refreshEachDay);
    })

    return(
        <View style={styles.container}>
            <Text style={styles.countDownText}>{days} days before Christmas !</Text>
            <Pressable style={[styles.greenButton, styles.alignCenter]} onPress={()=> navigation.navigate('Home')} >
                <Text style={styles.buttonText}>Back</Text>
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
  countDownText: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
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
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
  }
});