/* eslint-disable react-hooks/exhaustive-deps */
import {RouteProp} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthStackParamList} from '..';
import {Strings} from '../../constants/Strings';
import {colors, Gutters, Layout} from '../../styles';
import Style from './Style';
import {Images} from '../../constants/Images';
import {useNavigation, useRoute} from '@react-navigation/native';
import {goBack, navigateAndSimpleReset} from '../../navigation/RootNavigation';
import TextField from '../../components/TextField/TextField';
import {useFormik} from 'formik';
import {SignupValidation} from '../../utils/validations';
import {pv} from '../../utils/constants';
import {gql, useMutation} from '@apollo/client';
import {useDispatch} from 'react-redux';
import {disableLoading, enableLoading} from '../../store/slices/loading';
import {setUser} from '../../store/slices/auth';
import {Routes} from '../../constants/Routes';
type AuthStackNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'AUTH_SIGNUP'
>;

type AuthStackRouteProp = RouteProp<AuthStackParamList, 'AUTH_SIGNUP'>;

interface ButtonOptionProps {
  onPress?: () => void;
  icon?: string;
  title: string;
}

const SIGNUP_EMAIL = gql`
  mutation SignUp(
    $name: NonEmptyString!
    $email: EmailAddress!
    $password: Password!
  ) {
    signUpWithEmail(name: $name, email: $email, password: $password) {
      user {
        id
        email
        name
        facebookId
        googleId
        appleId
      }
      accessToken
      refreshToken
    }
  }
`;

export default function Signup() {
  const navigation = useNavigation<AuthStackNavigationProp>();
  //   const route = useRoute<AuthStackRouteProp>();

  const {navigate, goBack} = navigation;
  const insets = useSafeAreaInsets();

  const [doSignup, {data, loading, error}] = useMutation(SIGNUP_EMAIL);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setUser({data: data.signUpWithEmail}));
      navigateAndSimpleReset(Routes.AUTH.PROFILE);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log('---', error.message);
    }
  }, [error]);

  useEffect(() => {
    if (loading) {
      dispatch(enableLoading());
    } else {
      dispatch(disableLoading());
    }
  }, [loading]);

  const layout = Layout();
  const gutters = Gutters();

  const form = useFormik({
    validationSchema: SignupValidation,
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      doSignup({
        variables: {
          name: values.name,
          email: values.email,
          password: values.password,
        },
      });
    },
  });

  const renderHeader = () => {
    return (
      <View
        style={[
          layout.rowHCenter,
          gutters.smallHPadding,
          {paddingTop: insets.top + pv(8)},
          gutters.smallBPadding,
        ]}>
        <TouchableOpacity
          onPress={goBack}
          activeOpacity={0.7}
          style={[layout.center, Style.backBtnContainer]}>
          <Image
            source={Images.back}
            style={Style.backIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={[Style.headerText, gutters.xxxlLMargin]}>
          {Strings.Signup.headerTitle}
        </Text>
      </View>
    );
  };

  return (
    <LinearGradient
      colors={[colors.SECONDARY, colors.PRIMARY]}
      style={[layout.fill]}>
      {renderHeader()}
      <ScrollView
        contentContainerStyle={[
          layout.fill,
          gutters.xlHPadding,
          gutters.regularTPadding,
        ]}>
        {Strings.Signup.fields?.map(el => {
          return (
            <TextField
              label={el.label}
              placeholder=""
              keyboardType={el.keyboardType}
              value={form.values[el.value]}
              onChangeText={text => {
                form.setFieldValue(el.value, text);
              }}
              secureTextEntry={el.value === 'password' ? true : false}
              onFocus={() => {
                form.setFieldTouched(el.value, false, true);
              }}
              onBlur={() => {
                form.setFieldTouched(el.value, true, true);
              }}
              error={form.touched[el.value] && form.errors[el.value]}
              errorText={form.errors[el.value]}
              // containerStyle={[gutters.regularTMargin]}
            />
          );
        })}
        {error && (
          <View
            style={[
              Style.errorContainer,
              gutters.smallHPadding,
              gutters.smallVPadding,
            ]}>
            <Text style={[Style.errorText]}>{error?.message}</Text>
          </View>
        )}
        <TouchableOpacity
          onPress={form.handleSubmit}
          disabled={!form.isValid}
          activeOpacity={0.7}
          style={[
            Style.signupBtn,
            layout.center,
            gutters.regularTMargin,
            {opacity: form.isValid ? 1 : 0.7},
          ]}>
          <Text style={[Style.signupBtnText]}>{Strings.Signup.signup}</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}
