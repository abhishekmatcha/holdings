import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from './constants';
import { NavigationContainer } from '@react-navigation/native';
import NavigationService from '../utils/NavigationService';
import Holdings from '../screens/Holdings';

const Routes = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer
      ref={(ref) => NavigationService.setTopLevelNavigator(ref)}
    >
      <Stack.Navigator
        initialRouteName={ROUTES.HOLDINGS}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name={ROUTES.HOLDINGS}
          component={Holdings}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
