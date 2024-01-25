import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './NavTypes';
import {routes} from './routes';
import GetStarted from '../screens/OnBoarding/GetStarted';
import SecondOnboarding from '../screens/OnBoarding/SecondOnboarding';
import FirstOnboarding from '../screens/OnBoarding/FirstOnboarding';
import Landing from '../screens/Landing/Landing';
import PhoneNum from '../screens/SignUp/PhoneNum';
import VerifyPhone from '../screens/SignUp/VerifyPhone';
import Success from '../screens/Success/Success';
import Pin from '../screens/SignUp/Pin';
import ConfirmPin from '../screens/SignUp/ConfirmPin';
import HomeBottomTabs from './HomeBottomTabs';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={routes.FIRST_ONBOARDING}
        component={FirstOnboarding}
      />
      <Stack.Screen
        options={{
          animation: 'slide_from_right',
        }}
        name={routes.SECOND_ONBOARDING}
        component={SecondOnboarding}
      />
      <Stack.Screen
        options={{
          animation: 'slide_from_right',
        }}
        name={routes.GETSTARTED}
        component={GetStarted}
      />
      <Stack.Screen
        options={{
          animation: 'slide_from_right',
        }}
        name={routes.LANDING}
        component={Landing}
      />
      <Stack.Screen
        options={{
          animation: 'simple_push',
        }}
        name={routes.PHONE}
        component={PhoneNum}
      />
      <Stack.Screen
        options={{
          animation: 'slide_from_right',
        }}
        name={routes.VERIFY_PHONE}
        component={VerifyPhone}
      />
      <Stack.Screen
        options={{
          animation: 'slide_from_bottom',
        }}
        name={routes.SUCCESS}
        component={Success}
      />
      <Stack.Screen
        options={{
          animation: 'slide_from_right',
        }}
        name={routes.PIN}
        component={Pin}
      />
      <Stack.Screen
        options={{
          animation: 'slide_from_right',
        }}
        name={routes.CONFIRM_PIN}
        component={ConfirmPin}
      />
      <Stack.Screen
        options={{
          animation: 'slide_from_right',
        }}
        name={routes.HOME}
        component={HomeBottomTabs}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
