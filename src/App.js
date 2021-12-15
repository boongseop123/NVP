
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { View, Text, Button } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStackScreen from './navigation/AuthStackScreen';
import MainTabScreen from './navigation/MainTab';
import { FLOWPREDICATE_TYPES } from '@babel/types';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Auth" component={AuthStackScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Main" component={MainTabScreen}

          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;