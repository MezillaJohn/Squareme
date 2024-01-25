import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {routes} from './routes';

export type RootStackParamList = {
  [routes.FIRST_ONBOARDING]: undefined;
  [routes.SECOND_ONBOARDING]: undefined;
  [routes.GETSTARTED]: undefined;
  [routes.LANDING]: undefined;
  [routes.PHONE]: undefined;
  [routes.VERIFY_PHONE]: undefined;
  [routes.SUCCESS]: {title: string; subTitle: string};
  [routes.PIN]: undefined;
  [routes.CONFIRM_PIN]: undefined;
  [routes.HOME]: undefined;
};

export type NavScreenProps = NativeStackScreenProps<
  RootStackParamList,
  firstOnboarding,
  secondONboarding,
  getStarted,
  landing,
  phone,
  verifyPhone,
  success,
  pin,
  confirmPin
>;
