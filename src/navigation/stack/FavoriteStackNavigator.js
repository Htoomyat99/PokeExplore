import {View, Text} from 'react-native';
import React from 'react';
import FavoriteScreen from '../../pages/FavoriteScreen';
import DetailScreen from '../../pages/DetailScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const FavoriteStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Favorite" component={FavoriteScreen} />
      <Stack.Screen name="Deatil" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default FavoriteStackNavigator;
