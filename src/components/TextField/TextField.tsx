/*
 * Project: rnchallenge
 * Created Date: Thursday, May 12th 2022
 * Author: Harsh Saini (harsh@radiansys.com)
 * -----
 * Last Modified: Thursday, May 12th 2022 5:44:57 pm
 * Modified By: Harsh Saini
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */
import React from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {Gutters} from '../../styles';
import Style from './Style';

interface TextFieldProps extends TextInputProps {
  containerStyle?: ViewStyle[];
  label: string;
  labelStyle?: TextStyle[];
  error: boolean;
  errorText: string;
}

export default function TextField(props: TextFieldProps) {
  const gutters = Gutters();
  return (
    <View style={[props.containerStyle, gutters.regularBMargin]}>
      <Text style={[Style.labelText].concat(props.labelStyle)}>
        {props.label}
      </Text>
      <TextInput style={[Style.textInput]} {...props} />
      {props?.error && <Text style={[Style.errorText]}>{props.errorText}</Text>}
    </View>
  );
}
