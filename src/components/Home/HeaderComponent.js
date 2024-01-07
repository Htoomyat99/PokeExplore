import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//icon
import GlobalIcon from '../../../assets/icons/GlobalIcon';

//utils
import {pokeColor} from '../../utils/theme/color';

const HeaderComponent = ({openLangModal}) => {
  return (
    <View style={style.container}>
      <Text style={style.headerText}>PokeExplore</Text>

      <TouchableOpacity onPress={openLangModal} activeOpacity={0.8}>
        <GlobalIcon />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  headerText: {
    fontSize: hp(2.5),
    fontFamily: 'Roboto-Bold',
    color: pokeColor.primary,
    marginTop: hp(3),
  },
});
