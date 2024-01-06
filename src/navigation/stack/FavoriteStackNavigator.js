import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screen
import FavoriteScreen from '../../pages/FavoriteScreen';
import DetailScreen from '../../pages/DetailScreen';

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
