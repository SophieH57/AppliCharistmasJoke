import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './component/Home';
import {CounterPage} from './component/CounterPage';
import {
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='CounterPage' component={CounterPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
