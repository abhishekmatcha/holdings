import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from './constants';
import { NavigationContainer } from '@react-navigation/native';
import NavigationService from '../utils/NavigationService';
import AppLoginScreen from '../screens/AppLoginScreen';

const Routes = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer
      ref={(ref) => NavigationService.setTopLevelNavigator(ref)}
    >
      <Stack.Navigator
        initialRouteName={ROUTES.APPLOGINSCREEN}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name={ROUTES.APPLOGINSCREEN}
          component={AppLoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
