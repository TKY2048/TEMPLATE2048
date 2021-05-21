import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Categories from "./Categories/Categories";
import Pokedex from "./Pokedex/Pokedex";

const Tab = createBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    initialRouteName={"Categories"}>
      <Tab.Screen name="Categorías" component={Categories}  />
      <Tab.Screen name="Pokedex" component={Pokedex} />
    </Tab.Navigator>
  );
}

export default TabsNavigation;
