import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  uid: string | null;
}

const initialState: UserState = {
  uid: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.uid = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
