import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeTabNavigator from './Tab/HomeTabNavigator';
import {AuthContext} from '../context/Context';

const AppNavigator = () => {
  const [lang, setLang] = useState('en');

  const context = {
    lang,

    getLang: val => {
      setLang(val);
    },
  };

  return (
    <AuthContext.Provider value={context}>
      <NavigationContainer>
        <HomeTabNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default AppNavigator;
