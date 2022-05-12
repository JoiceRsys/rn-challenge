/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-floating-promises */
/*
 * Project: rnchallenge
 * Created Date: Saturday, January 8th 2022
 * Author: Sourav Jangra
 * -----
 * Last Modified: Thursday, May 12th 2022 11:18:44 am
 * Modified By: Harsh Saini
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */

import React, {useEffect} from 'react';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {navigate, navigationRef} from './RootNavigation';

import {
  AuthStackParamList,
  commonScreens,
  CommonStackParamList,
} from '../screens';
import {ActivityIndicator, Platform, SafeAreaView, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState, useAppSelector} from '../store';
import KeyboardManager from 'react-native-keyboard-manager';
import {Routes} from '../constants/Routes';
import {colors, Layout} from '../styles';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setContext} from '@apollo/client/link/context';

const screenOptions = {
  cardStyle: {backgroundColor: colors.WHITE},
  headerShown: false,
};

const httpLink = createHttpLink({
  uri: 'https://api-dev.foodstyles.com/graphql',
});

const authLink = setContext(async (_, {headers}) => {
  // get the authentication token from local storage if it exists
  const token = await AsyncStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  console.log(token);
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // uri: 'https://api.graphql.guide/graphql',
  // uri: 'https://api-dev.foodstyles.com/graphql',
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
});

type ParamList = CommonStackParamList;
export const Stack = createNativeStackNavigator<ParamList>();

if (Platform.OS === 'ios') {
  KeyboardManager.setEnable(true);
  KeyboardManager.setEnableDebugging(true);
  KeyboardManager.setKeyboardDistanceFromTextField(10);
  KeyboardManager.setEnableAutoToolbar(true);
  KeyboardManager.setToolbarDoneBarButtonItemText('Done');
  KeyboardManager.setToolbarManageBehaviourBy('subviews'); // "subviews" | "tag" | "position"
  KeyboardManager.setToolbarPreviousNextButtonEnable(false);
  KeyboardManager.setToolbarTintColor('#0000FF'); // Only #000000 format is supported
  KeyboardManager.setToolbarBarTintColor('#FFFFFF'); // Only #000000 format is supported
  KeyboardManager.setShouldShowToolbarPlaceholder(true);
  KeyboardManager.setOverrideKeyboardAppearance(false);
  KeyboardManager.setKeyboardAppearance('default'); // "default" | "light" | "dark"
  KeyboardManager.setShouldResignOnTouchOutside(true);
  KeyboardManager.setShouldPlayInputClicks(true);
  KeyboardManager.resignFirstResponder();
  KeyboardManager.isKeyboardShowing().then(isShowing => {
    // ...
  });
}

const linking: LinkingOptions<ParamList> = {
  prefixes: ['HelloWorld://'],
  config: {
    screens: {},
  },
};

export default function Router() {
  const loading = useAppSelector(state => state.loading.isLoading);

  const renderLoader = () => {
    const layout = Layout();

    return (
      <View
        style={[
          layout.center,
          {
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          },
        ]}>
        <ActivityIndicator size={'large'} color={colors.WHITE} />
        {/* <Loader/> */}
        {/* <LottieView
          source={require('@/Assets/lottie/loader.json')}
          autoPlay={true}
          loop={true}
          hardwareAccelerationAndroid={false}
          resizeMode="contain"
          style={styles.loader}
        /> */}
      </View>
    );
  };

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider style={{flex: 1}}>
        <NavigationContainer linking={linking} ref={navigationRef}>
          <Stack.Navigator
            screenOptions={screenOptions}
            initialRouteName={Routes.AUTH.INDEX}>
            {Object.entries({
              ...commonScreens,
            }).map(([name, props]) => {
              return (
                <Stack.Screen
                  key={name}
                  name={name as keyof ParamList}
                  {...props}
                />
              );
            })}
          </Stack.Navigator>
        </NavigationContainer>
        {loading && renderLoader()}
      </SafeAreaProvider>
    </ApolloProvider>
  );
}
