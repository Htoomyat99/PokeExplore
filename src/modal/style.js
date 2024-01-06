import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {pokeColor} from '../utils/theme/color';

const style = StyleSheet.create({
  modalContianer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(52, 52, 52, 0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(100),
    height: hp(100),
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
  },
  container: {
    backgroundColor: pokeColor.white,
    borderRadius: hp(0.8),
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
    alignItems: 'center',
  },
  headerText: {
    fontSize: hp(2.2),
    fontFamily: 'Roboto-Medium',
    color: pokeColor.primary,
  },
  langContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp(2.5),
    width: wp(50),
    marginTop: wp(1),
    borderRadius: wp(1),
  },
  image: {
    resizeMode: 'cover',
    width: wp(7),
    height: wp(4.5),
  },
  langText: {
    fontFamily: 'Roboto-Regular',
    fontSize: hp(1.8),
  },
});

export default style;
