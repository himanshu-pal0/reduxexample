import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

//Navigation import
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import HomePage from '../screens/Login';
import {MyTabs}  from './Tabs';

const Navigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'
        screenOptions={{
          headerShown: false, 
        }}>
        <Stack.Screen name='MyTabs' component={MyTabs} />
        <Stack.Screen name="Login" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
