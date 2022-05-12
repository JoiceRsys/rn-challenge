/* eslint-disable react-hooks/exhaustive-deps */
import {gql, useMutation} from '@apollo/client';
import {RouteProp, useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useFormik} from 'formik';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {AuthStackParamList} from '..';
import TextField from '../../components/TextField/TextField';
import {Routes} from '../../constants/Routes';
import {Strings} from '../../constants/Strings';
import {navigateAndSimpleReset} from '../../navigation/RootNavigation';
import {useAppSelector} from '../../store';
import {doLogout, updateUser} from '../../store/slices/auth';
import {disableLoading, enableLoading} from '../../store/slices/loading';
import {Gutters, Layout} from '../../styles';
import {pv} from '../../utils/constants';
import {ProfileValidation} from '../../utils/validations';
import Style from './Style';

type AuthStackNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'AUTH_PROFILE'
>;

type AuthStackRouteProp = RouteProp<AuthStackParamList, 'AUTH_PROFILE'>;

const UPDATE_USER = gql`
  mutation UpdateUser($name: NonEmptyString!, $email: EmailAddress!) {
    updateUser(name: $name, email: $email) {
      id
      name
      email
      facebookId
      googleId
      appleId
    }
  }
`;

export default function Profile() {
  const insets = useSafeAreaInsets();
  const gutters = Gutters();
  const layout = Layout();
  const navigation = useNavigation<AuthStackNavigationProp>();
  //   const route = useRoute<AuthStackRouteProp>();

  const authState = useAppSelector(state => state.auth);
  const token = authState.accessToken;

  const [editProfile, {data, loading, error}] = useMutation(UPDATE_USER);

  const {navigate} = navigation;

  const user = authState.user;
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(updateUser({data: data.updateUser}));
    }
  }, [data]);

  const form = useFormik({
    validationSchema: ProfileValidation,
    initialValues: {
      name: user?.name ?? '',
      email: user?.email ?? '',
    },
    onSubmit: values => {
      editProfile({
        variables: {name: values.name, email: values.email},
      });
    },
  });

  useEffect(() => {
    if (loading) {
      dispatch(enableLoading());
    } else {
      dispatch(disableLoading());
    }
  }, [loading]);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  const onLogout = () => {
    dispatch(doLogout());
    navigateAndSimpleReset(Routes.AUTH.LANDING);
  };

  return (
    <View
      style={[
        Style.profileContainer,
        {paddingTop: insets.top, paddingBottom: insets.bottom, width: '100%'},
      ]}>
      <View style={{flex: 0.7}}>
        <Text
          style={[
            Style.profileHeader,
            gutters.regularLMargin,
            gutters.regularVMargin,
          ]}>
          {Strings.profile.headerTitle}
        </Text>
        {Strings.profile.fields?.map(el => {
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
              containerStyle={[gutters.regularHMargin]}
              labelStyle={[Style.labelText, gutters.smallBMargin]}
              style={[Style.textInputStyle]}
            />
          );
        })}
      </View>
      <View style={{flex: 0.3, width: '100%'}}>
        <View style={{flex: 0.6}}>
          <TouchableOpacity
            onPress={onLogout}
            style={[Style.logoutBtn, layout.center, layout.selfCenter]}>
            <Text style={Style.logoutText}>{Strings.profile.logout}</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.doneContainer}>
          <TouchableOpacity
            onPress={form.handleSubmit}
            disabled={!form.isValid}
            activeOpacity={0.7}
            style={[
              Style.signupBtn,
              layout.center,
              {opacity: form.isValid ? 1 : 0.7, marginTop: pv(-15)},
            ]}>
            <Text style={[Style.signupBtnText]}>{Strings.profile.done}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
