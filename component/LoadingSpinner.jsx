import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

export function LoadingSpinner() {
  return (
    <View style={styles.activityIndicatorWrapper}>
      <ActivityIndicator color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  activityIndicatorWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
