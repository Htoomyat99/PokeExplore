import {View, Text} from 'react-native';
import React from 'react';

const FavoriteScreen = () => {
  interface User {
    name: string;
    age: number;
  }

  const user: User = {
    name: 'Htoo Myat',
    age: 10,
  };
  return (
    <View style={{flex: 1, backgroundColor: 'lightblue'}}>
      <Text>{user.name}</Text>
    </View>
  );
};

export default FavoriteScreen;
