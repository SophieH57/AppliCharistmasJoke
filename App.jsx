import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './component/Home';
import { CounterPage } from './component/CounterPage';
import { LocationPage } from './component/LocationPage';
// import {Camera} from './component/CameraPage';
import {
  useColorScheme,
} from 'react-native';
import {enableLatestRenderer} from 'react-native-maps';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { CameraPage } from './component/CameraPage';

enableLatestRenderer();

const Stack = createNativeStackNavigator();

const ChristmasTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ffffff',
    background: '#db1111'
  },
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer theme={ChristmasTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='CounterPage' component={CounterPage}></Stack.Screen>
        <Stack.Screen name='Photo' component={CameraPage}></Stack.Screen>
        <Stack.Screen name='Location' component={LocationPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
