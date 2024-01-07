import {View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
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
import {fetchGet} from '../utils/fetchData';
import apiUrl from '../utils/apiUrl';

const HomeScreen = () => {
  const {getLang} = useContext(AuthContext);
  const [openLang, setOpenLang] = useState(false);
  const [selected, setSelected] = useState('en');

  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    fetchPokeCard();
  }, []);

  const fetchPokeCard = async () => {
    const respone = await fetchGet(apiUrl.card, signal);
    if (respone != null) {
      console.log('respone >>>>', respone.data[0].attacks);
    } else {
      console.log('error');
    }
  };

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
