import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './component/Home';
import {CounterPage} from './component/CounterPage';
import {ThemeProvider} from './theme/ThemeProvider';
import { LocationPage } from './component/LocationPage';
import {
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';


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
        <Stack.Screen name='Location' component={LocationPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
