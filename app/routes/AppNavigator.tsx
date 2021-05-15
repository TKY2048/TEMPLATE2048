import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home/Home';

const {Navigator, Screen} = createStackNavigator();

function AppNavigator() {
  return (
    <Navigator>
      <Screen name={'Home'} component={Home} />
    </Navigator>
  );
}

export default AppNavigator;
