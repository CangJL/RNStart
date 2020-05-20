import {createSlice} from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'login',
  initialState: {
    userToken: null,
    price: 0
  },
  reducers: {
    increase: (state, action) => {
      console.log("increase");
      state.price += 1
    },
    decrease: (state, action) => {
      console.log("decrease");
      state.price -= 1
    },
  }
});

export const {increase, decrease} = slice.actions;

// export const price = state => state.login.price;

export default slice.reducer;
