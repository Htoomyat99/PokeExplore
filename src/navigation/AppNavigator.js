import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeTabNavigator from './Tab/HomeTabNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeTabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
