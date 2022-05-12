import {RouteProp} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Image, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthStackParamList} from '..';
import {Strings} from '../../constants/Strings';
import {colors, Gutters, Layout} from '../../styles';
import Style from './Style';
import {Images} from '../../constants/Images';
import {navigate} from '../../navigation/RootNavigation';
import {Routes} from '../../constants/Routes';
import {useNavigation} from '@react-navigation/native';
type AuthStackNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'AUTH_LANDING'
>;

type AuthStackRouteProp = RouteProp<AuthStackParamList, 'AUTH_LANDING'>;

interface ButtonOptionProps {
  onPress?: () => void;
  icon?: string;
  title: string;
}

export default function Landing() {
  const layout = Layout();
  const gutters = Gutters();
  const navigation = useNavigation<AuthStackNavigationProp>();
  //   const route = useRoute<AuthStackRouteProp>();

  const {navigate} = navigation;

  const navigateToLogin = () => {
    navigate(Routes.AUTH.LOGIN as keyof AuthStackParamList);
  };

  const navigateToSignup = () => {
    navigate(Routes.AUTH.SIGNUP as keyof AuthStackParamList);
  };

  const renderStrip = () => {
    return (
      <View style={[layout.center, Style.stripContainer]}>
        <Text style={[Style.stripText]}>{Strings.Landing.beta}</Text>
      </View>
    );
  };

  const renderLogo = () => {
    return (
      <View
        style={[
          layout.alignItemsCenter,
          gutters.xxxlTMargin,
          gutters.regularBMargin,
        ]}>
        <Image source={Images.logo} style={Style.logo} resizeMode="contain" />
        <Text
          style={[
            Style.landingText,
            gutters.largeHMargin,
            gutters.mediumTMargin,
          ]}>
          {Strings.Landing.landingHelpText}
        </Text>
      </View>
    );
  };

  const ButtonOptions = (props: ButtonOptionProps) => {
    return (
      <TouchableOpacity
        onPress={props.onPress}
        activeOpacity={0.7}
        style={[
          Style.btnContainer,
          layout.selfCenter,
          layout.center,
          layout.row,
          gutters.regularTMargin,
        ]}>
        {props?.icon && (
          <Image
            source={props.icon}
            style={Style.icon}
            resizeMode={'contain'}
          />
        )}
        <Text style={[Style.signupOptionText, gutters.tinyLMargin]}>
          {props.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <LinearGradient
      colors={[colors.SECONDARY, colors.PRIMARY]}
      style={[layout.fill]}>
      {renderStrip()}
      <SafeAreaView style={[layout.fill]}>
        <ScrollView contentContainerStyle={[layout.fill]}>
          {renderLogo()}
          <ButtonOptions title={Strings.Landing.apple} icon={Images.apple} />
          <ButtonOptions
            title={Strings.Landing.facebook}
            icon={Images.facebook}
          />
          <ButtonOptions title={Strings.Landing.google} icon={Images.google} />
          <ButtonOptions
            title={Strings.Landing.email}
            onPress={navigateToSignup}
          />
          <Text
            onPress={navigateToLogin}
            style={[Style.loginText, gutters.mediumTMargin, layout.selfCenter]}>
            {Strings.Landing.login}
          </Text>
          <Text
            style={[
              Style.policyText,
              gutters.largeTMargin,
              layout.selfCenter,
              gutters.largeHMargin,
            ]}>
            {Strings.Landing.signupText}{' '}
            <Text style={Style.underline}>{Strings.Landing.terms}</Text>
            {' and '}
            <Text style={Style.underline}>{Strings.Landing.policy}</Text>
          </Text>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
