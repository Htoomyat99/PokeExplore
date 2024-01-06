import {View, Text, FlatList, StyleSheet, Platform} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//utils
import {pokeColor} from '../../utils/theme/color';

const BodyComponent = ({data}) => {
  const renderItem = ({item, index}) => {
    return (
      <View style={style.itemContainer}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <FlatList
      numColumns={2}
      style={style.container}
      keyExtractor={item => item.id}
      data={data}
      renderItem={renderItem}
      columnWrapperStyle={{justifyContent: 'center'}}
    />
  );
};

export default BodyComponent;

const style = StyleSheet.create({
  container: {
    marginTop: hp(2),
    alignContent: 'center',
  },
  itemContainer: {
    backgroundColor: pokeColor.primary,
    width: wp(42),
    marginVertical: hp(1),
    marginHorizontal: wp(2.8),
    paddingVertical: hp(7),
    paddingHorizontal: wp(3),
    borderRadius: wp(1.3),
  },
});
