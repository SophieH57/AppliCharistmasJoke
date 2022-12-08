import React, { useState } from 'react'
import { StyleSheet, View, Text, Pressable } from "react-native";

export function CounterPage({navigation}){
    const[days, setDays] = useState(0);

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