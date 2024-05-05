import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserInfo = {
  username: string;
} | null;

export type GlobalState = {
  user: UserInfo;
};
const initialState: GlobalState = {
  user: {
    username: 'admin',
  },
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInfo>) => {
      state.user = action.payload;
    },
    /*increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }*/
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = globalSlice.actions;

export default globalSlice.reducer;
