
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigations/authNavigation/AuthStack';

const  App = () => {

  return (
    <NavigationContainer>
   <AuthStack/>
    </NavigationContainer>
  );

}

export default App;





































