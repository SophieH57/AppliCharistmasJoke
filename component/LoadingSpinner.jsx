import React from 'react'
import { StyleSheet, View, ActivityIndicator } from "react-native";

export function LoadingSpinner() {
  return (
    <View style={styles.modalBackground}>
      <View style={styles.activityIndicatorWrapper}>
        <ActivityIndicator color="white" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  activityIndicatorWrapper: {
    height: 50,
    width: 50,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});