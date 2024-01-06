import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screen
import HomeScreen from '../../pages/HomeScreen';
import DetailScreen from '../../pages/DetailScreen';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Deatil" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
