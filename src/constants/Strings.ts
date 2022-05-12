/*
 * Project: rnchallenge
 * Created Date: Thursday, May 12th 2022
 * Author: Harsh Saini (harsh@radiansys.com)
 * -----
 * Last Modified: Thursday, May 12th 2022 4:18:54 pm
 * Modified By: Harsh Saini
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */
export const Strings = {
  Landing: {
    beta: 'BETA VERSION',
    landingHelpText:
      'Sign in to be able to save your preferences and settings.',
    apple: 'Sign in with Apple',
    facebook: 'Sign in with Facebook',
    google: 'Sign in with Google',
    email: 'Sign up with Email',
    login: 'Log in with Email',
    signupText: 'By signing in you accept the',
    terms: 'General Terms',
    policy: 'Privacy Policy',
  },
  Signup: {
    headerTitle: 'Sign up with Email',
    fields: [
      {
        label: 'Your Name',
        value: 'name',
        maxLength: 40,
        keyboardType: 'default',
      },
      {
        label: 'Email',
        value: 'email',
        maxLength: 40,
        keyboardType: 'email',
      },
      {
        label: 'Password (min 6 characters)',
        value: 'password',
        maxLength: 40,
        keyboardType: 'default',
      },
    ],
    signup: 'SIGN UP',
  },
  Login: {
    headerTitle: 'Log in',
    fields: [
      {
        label: 'Email',
        value: 'email',
        maxLength: 40,
        keyboardType: 'email',
      },
      {
        label: 'Password',
        value: 'password',
        maxLength: 40,
        keyboardType: 'default',
      },
    ],
    login: 'LOG IN',
  },
  profile: {
    headerTitle: 'PROFILE',
    fields: [
      {
        label: 'Name shown on your shared cards',
        value: 'name',
        maxLength: 40,
        keyboardType: 'default',
      },
      {
        label: 'Email',
        value: 'email',
        maxLength: 40,
        keyboardType: 'default',
      },
    ],
    logout: 'LOG OUT',
    done: 'DONE',
  },
};
