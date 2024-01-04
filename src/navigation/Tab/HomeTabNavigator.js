import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from '../stack/HomeStackNavigator';
import SearchStackNavigator from '../stack/SearchStackNavigator';
import FavoriteStackNavigator from '../stack/FavoriteStackNavigator';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: true}}>
      <Tab.Screen name="HomeStack" component={HomeStackNavigator} />
      <Tab.Screen name="SearchStack" component={SearchStackNavigator} />
      <Tab.Screen name="FavoriteStack" component={FavoriteStackNavigator} />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
