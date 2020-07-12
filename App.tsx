import * as React from 'react';
import {Text, View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/Views/Home/index';
import Profile from './src/Views/Profile/index';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#171539" />
      {/* <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#365DDC',
          keyboardHidesTabBar: true,
          tabStyle: {
            backgroundColor: '#171539',
          },
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Profile} />
      </Tab.Navigator> */}

      <Stack.Navigator
        screenOptions={{
          title: 'Mai Muvie',

          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
          },
          headerTintColor: '#FB8A00',
          headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
