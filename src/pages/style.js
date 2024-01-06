import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {pokeColor} from '../utils/theme/color';

const style = StyleSheet.create({
  //HomeScreen
  container: {
    flex: 1,
    backgroundColor: pokeColor.lavendar,
    alignItems: 'center',
  },
});

export default style;
