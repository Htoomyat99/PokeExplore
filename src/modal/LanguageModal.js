import {View, Text, Modal, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//utils
import {pokeColor} from '../utils/theme/color';
import {useLocal} from '../hook/useLocal';

const LanguageModal = ({onRequestClose, onPress, selected}) => {
  const local = useLocal();

  const data = [
    {
      code: 'mm',
      name: 'Myanmar',
      flag: require('../../assets/images/myaFlag.png'),
    },
    {
      code: 'en',
      name: 'English',
      flag: require('../../assets/images/usaFlag.png'),
    },
  ];

  return (
    <Modal
      style={style.modalContianer}
      visible={true}
      transparent={true}
      onRequestClose={onRequestClose}
      animationType="fade">
      <TouchableOpacity
        style={style.mainContainer}
        activeOpacity={1}
        onPress={onRequestClose}>
        <View style={style.container}>
          <Text style={style.headerText}>{local.language}</Text>

          <View style={{marginTop: hp(2)}}>
            {data.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => onPress(item)}
                  key={index}
                  style={[
                    style.langContainer,
                    {
                      backgroundColor:
                        selected == item.code
                          ? pokeColor.primary
                          : pokeColor.lavendar,
                    },
                  ]}>
                  <Image source={item.flag} style={style.image} />
                  <Text
                    style={[
                      style.langText,
                      {
                        color:
                          selected == item.code
                            ? pokeColor.white
                            : pokeColor.gray,
                      },
                    ]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default LanguageModal;
