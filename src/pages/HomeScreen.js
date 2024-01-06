import {
  View,
  Text,
  StatusBar,
  FlatList,
  Touchable,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {pokeColor} from '../utils/theme/color';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import CustomStatusBar from '../components/CustomStatusBar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import style from './style';
import {data} from '../data/FakeData';

import LanguageModal from '../modal/LanguageModal';
import {AuthContext} from '../context/Context';
import HeaderComponent from '../components/Home/HeaderComponent';
import BodyComponent from '../components/Home/BodyComponent';

const HomeScreen = () => {
  const {getLang} = useContext(AuthContext);
  const [openLang, setOpenLang] = useState(false);
  const [selected, setSelected] = useState('en');

  const openLangModal = () => {
    setOpenLang(true);
  };

  const onRequestClose = () => {
    setOpenLang(false);
  };

  const langChangeHandler = item => {
    setSelected(item.code);
    setOpenLang(false);
    getLang(item.code);
  };

  return (
    <SafeAreaProvider>
      <CustomStatusBar
        backgroundColor={pokeColor.primary}
        barStyle={'light-content'}
      />

      <View style={style.container}>
        <View style={{width: wp(90)}}>
          <HeaderComponent openLangModal={openLangModal} />

          <BodyComponent data={data} />
        </View>
      </View>

      {openLang && (
        <LanguageModal
          onPress={langChangeHandler}
          onRequestClose={onRequestClose}
          selected={selected}
        />
      )}
    </SafeAreaProvider>
  );
};

export default HomeScreen;
