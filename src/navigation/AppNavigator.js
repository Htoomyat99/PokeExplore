import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

//context
import {AuthContext} from '../context/Context';

//tab
import HomeTabNavigator from './Tab/HomeTabNavigator';

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
