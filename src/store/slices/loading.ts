import {createSlice} from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoading: false,
  },
  reducers: {
    enableLoading: state => {
      state.isLoading = true;
    },
    disableLoading: state => {
      state.isLoading = false;
    },
  },
});

export const {enableLoading, disableLoading} = loadingSlice.actions;
const loadingReducer = loadingSlice.reducer;
export default loadingReducer;
