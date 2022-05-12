import {Routes} from '../constants/Routes';
// import {TransitionPresets} from '@react-navigation/stack';
import AuthStack from '../navigation/stack/AuthStack';

export type CommonStackParamList = {
  /* PLOP_INJECT_TYPE */
  AUTH_INDEX: AuthStackParamList;
};

export type AuthStackParamList = {
  /* PLOP_INJECT_TYPE */
  AUTH_LANDING: undefined;
  AUTH_LOGIN: undefined;
  AUTH_SIGNUP: undefined;
  AUTH_PROFILE: undefined;
};

// const bottomSheetNavOptions = {
//   headerShown: false,
//   presentation: 'transparentModal',
//   ...TransitionPresets.FadeFromBottomAndroid,
// };

export const commonScreens = {
  /* PLOP_INJECT_SCREEN */
  [Routes.AUTH.INDEX]: {
    component: AuthStack,
  },
};
