
import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Signup from './Signup';
import Home from '../appNavigation/Home';


const AuthStack = () => {

  const Stack = createNativeStackNavigator();

  return (

    <Stack.Navigator initialRouteName='Login' >
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>

  );


}

export default AuthStack;