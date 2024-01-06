import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//stack
import HomeStackNavigator from '../stack/HomeStackNavigator';
import SearchStackNavigator from '../stack/SearchStackNavigator';
import FavoriteStackNavigator from '../stack/FavoriteStackNavigator';

//hooks
import {useLocal} from '../../hook/useLocal';

//utils
import {pokeColor} from '../../utils/theme/color';

//icons
import HomeIcon from '../../../assets/icons/HomeIcon';
import SearchIcon from '../../../assets/icons/SearchIcon';
import FavoriteIcon from '../../../assets/icons/FavoriteIcon';
import FavoriteFilled from '../../../assets/icons/FavoriteFilledIcon';
import HomeFilledIcon from '../../../assets/icons/HomeFilledIcon';

const Tab = createBottomTabNavigator();

const Stack = ['HomeStack', 'SearchStack', 'FavoriteStack'];

const HomeTabNavigator = () => {
  const local = useLocal();

  const navigationStyle = route => ({
    headerShown: false,
    tabBarLabelStyle: style.tabBarLabel,
    tabBarActiveTintColor: pokeColor.primary,
    tabBarInactiveTintColor: pokeColor.gray,
    tabBarItemStyle: style.tabBarItem,
    tabBarHideOnKeyboard: true,
    unmountOnBlur: true,
    tabBarIcon: ({focused}) => {
      let iconName;
      switch (route.name) {
        case 'HomeStack':
          if (focused) iconName = <HomeFilledIcon fill={pokeColor.primary} />;
          else iconName = <HomeIcon />;
          break;
        case 'SearchStack':
          if (focused)
            iconName = (
              <SearchIcon
                width={wp(5)}
                height={wp(5)}
                fill={pokeColor.primary}
              />
            );
          else
            iconName = (
              <SearchIcon width={wp(5)} height={wp(5)} fill={pokeColor.gray} />
            );
          break;
        case 'FavoriteStack':
          if (focused) iconName = <FavoriteFilled fill={pokeColor.primary} />;
          else iconName = <FavoriteIcon color={pokeColor.gray} />;
        default:
          break;
      }
      return iconName;
    },
    tabBarStyle: (route => {
      const routeName = getFocusedRouteNameFromRoute(route) ?? '';
      if (Stack.includes(routeName)) {
        return {display: 'none'};
      }
      return {
        backgroundColor: pokeColor.whiteSmoke,
        height: hp(8),
        paddingTop: hp(0.7),
        paddingBottom: hp(0.7),
        paddingHorizontal: hp(1.3),
        position: 'absolute',
        bottom: hp(1.2),
        marginHorizontal: wp(7),
        // borderTopRightRadius: wp(13),
        // borderBottomLeftRadius: wp(13),
        borderRadius: wp(8),
      };
    })(route),
  });

  return (
    <Tab.Navigator screenOptions={({route}) => navigationStyle(route)}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{title: local.home}}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStackNavigator}
        options={{title: local.search}}
      />
      <Tab.Screen
        name="FavoriteStack"
        component={FavoriteStackNavigator}
        options={{title: local.favorite}}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;

export const style = StyleSheet.create({
  tabBarLabel: {
    fontFamily: 'Roboto-Medium',
    fontSize: hp(1.55),
  },
  tabBarItem: {
    fontFamily: 'Roboto-Regular',
    fontSize: hp(1.55),
  },
});
