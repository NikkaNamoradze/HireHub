import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  uid: string | undefined;
}

const initialState: UserState = {
  uid: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string|undefined>) => {
      state.uid = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
