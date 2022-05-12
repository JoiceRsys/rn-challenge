import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoginWithEmail, User} from '../../interfaces/Auth';

export interface AuthState {
  isLoggedIn: boolean;
  accessToken: string | undefined;
  user: User | undefined;
}

const initialState: AuthState = {
  isLoggedIn: false,
  accessToken: undefined,
  user: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        data: LoginWithEmail;
      }>,
    ) => {
      AsyncStorage.setItem('token', action.payload.data.accessToken);
      state.user = action.payload.data.user;
      state.accessToken = action.payload.data.accessToken;
      state.isLoggedIn = true;
    },
    doLogout: state => {
      AsyncStorage.removeItem('token');
      state.user = initialState.user;
      state.accessToken = initialState.accessToken;
      state.isLoggedIn = false;
    },
    updateUser: (state, action: PayloadAction<{data: User}>) => {
      state.user = action.payload.data;
    },
  },
  extraReducers: builder => {},
});

export const {setUser, doLogout, updateUser} = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
