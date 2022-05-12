import {Routes} from '../../constants/Routes';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AuthStackParamList, CommonStackParamList} from '../../screens';
import React from 'react';
import {Platform} from 'react-native';
import {Landing, Login, Profile, Signup} from '../../screens/Auth';
import {colors, Layout} from '../../styles';
import LinearGradient from 'react-native-linear-gradient';
import {useAppSelector} from '../../store';

type ParamList = AuthStackParamList;
const Auth = createNativeStackNavigator<ParamList>();

export const authScreens = {
  [Routes.AUTH.LANDING]: {
    component: Landing,
    options: {
      title: '',
      headerShown: false,
    } as NativeStackNavigationOptions,
  },
  [Routes.AUTH.SIGNUP]: {
    component: Signup,
    options: {
      title: '',
      headerShown: false,
    } as NativeStackNavigationOptions,
  },
  [Routes.AUTH.LOGIN]: {
    component: Login,
    options: {
      title: '',
      headerShown: false,
    } as NativeStackNavigationOptions,
  },
  [Routes.AUTH.PROFILE]: {
    component: Profile,
    options: {
      title: '',
      headerShown: false,
    } as NativeStackNavigationOptions,
  },
};

type AuthStackNavigationProp = NativeStackNavigationProp<
  CommonStackParamList,
  'AUTH_INDEX'
>;

type AuthStackRouteProp = RouteProp<CommonStackParamList, 'AUTH_INDEX'>;

function AuthStack() {
  const navigation = useNavigation<AuthStackNavigationProp>();
  const route = useRoute<AuthStackRouteProp>();
  const layout = Layout();

  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  // const gutters = Gutters();

  //   const headerTitle = (e: {children: string}) => {
  //     const {children} = e;
  //     return (
  //       <Typography
  //         variant="bold7"
  //         width={Platform.OS === 'ios' ? '100%' : 'auto'}>
  //         {children}
  //       </Typography>
  //     );
  //   };

  //   const headerLeft = (e: {canGoBack: boolean}) => {
  //     const {canGoBack} = e;
  //     return <BackButton variant="backArrow" canGoBack={canGoBack} />;
  //   };

  return (
    <Auth.Navigator
      screenOptions={{
        // headerTitle,
        // headerLeft,
        headerBackVisible: false,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: 'white',
        },
      }}
      initialRouteName={
        isLoggedIn
          ? (Routes.AUTH.PROFILE as keyof AuthStackParamList)
          : (Routes.AUTH.LANDING as keyof AuthStackParamList)
      }>
      {Object.entries({
        ...authScreens,
      }).map(([name, props]) => {
        return (
          <Auth.Screen key={name} name={name as keyof ParamList} {...props} />
        );
      })}
    </Auth.Navigator>
  );
}

export default AuthStack;
