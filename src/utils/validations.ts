import * as Yup from 'yup';

export const SignupValidation = Yup.object().shape({
  name: Yup.string().required('Name is Required'),
  email: Yup.string().required('Email is Required').email('Email is Invalid'),
  password: Yup.string()
    .required('Password is Required')
    .min(6, 'Password must contain 6 characters'),
});

export const LoginValidation = Yup.object().shape({
  email: Yup.string().required('Email is Required').email('Email is Invalid'),
  password: Yup.string()
    .required('Password is Required')
    .min(6, 'Password must contain 6 characters'),
});

export const ProfileValidation = Yup.object().shape({
  name: Yup.string().required('Name is Required'),
  email: Yup.string().required('Email is Required').email('Email is Invalid'),
});
