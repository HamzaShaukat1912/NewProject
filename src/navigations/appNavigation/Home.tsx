import { Gesture } from 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';


const  Home = ({navigation,route}) => {

  return (
   <View style={styles.container}>
    <Text>HomeScreen</Text>
    <Text>UserEmail={route.params.userEmail}</Text>

   </View>
  );

  
}

export default Home;

const styles = StyleSheet.create({
container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
}

})





































