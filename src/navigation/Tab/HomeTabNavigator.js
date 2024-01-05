import {View, Text, StyleSheet, Platform} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from '../stack/HomeStackNavigator';
import SearchStackNavigator from '../stack/SearchStackNavigator';
import FavoriteStackNavigator from '../stack/FavoriteStackNavigator';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {pokeColor} from '../../utils/theme/color';
import HomeIcon from '../../../assets/icons/HomeIcon';
import SearchIcon from '../../../assets/icons/SearchIcon';
import FavoriteIcon from '../../../assets/icons/FavoriteIcon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FavoriteFilled from '../../../assets/icons/FavoriteFilled';
import HomeFilledIcon from '../../../assets/icons/HomeFilledIcon';
import {useLocal} from '../../hook/useLocal';

const Tab = createBottomTabNavigator();

const Stack = ['HomeStack', 'SearchStack', 'FavoriteStack'];

const HomeTabNavigator = () => {
  const navigationStyle = route => {};
  const local = useLocal();

  return (
    // <Tab.Navigator screenOptions={({route}) => navigationStyle(route)}>
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabelStyle: style.tabBarLabel,
        tabBarActiveTintColor: 'teal',
        tabBarInactiveTintColor: 'gray',
        tabBarItemStyle: style.tabBarItem,
        tabBarHideOnKeyboard: true,
        unmountOnBlur: true,
        tabBarIcon: ({focused}) => {
          let iconName;
          switch (route.name) {
            case 'HomeStack':
              if (focused) iconName = <HomeFilledIcon />;
              else iconName = <HomeIcon />;
              break;
            case 'SearchStack':
              if (focused)
                iconName = (
                  <SearchIcon width={wp(5)} height={wp(5)} fill={'#000'} />
                );
              else
                iconName = (
                  <SearchIcon width={wp(5)} height={wp(5)} fill={'gray'} />
                );
              break;
            case 'FavoriteStack':
              if (focused) iconName = <FavoriteFilled fill={'#000'} />;
              else iconName = <FavoriteIcon color={'gray'} />;
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
            backgroundColor: '#F5F5F5',
            height: hp(8),
            paddingTop: hp(0.7),
            paddingBottom: hp(0.7),
            paddingHorizontal: hp(1.3),
            position: 'absolute',
            bottom: hp(1.2),
            marginHorizontal: wp(5),
            // borderTopRightRadius: wp(13),
            // borderBottomLeftRadius: wp(13),
            borderRadius: wp(8),
          };
        })(route),
      })}>
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
