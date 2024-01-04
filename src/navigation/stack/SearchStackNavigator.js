import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../../pages/SearchScreen';
import DetailScreen from '../../pages/DetailScreen';

const Stack = createNativeStackNavigator();

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Deatil" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default SearchStackNavigator;
