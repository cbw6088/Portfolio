import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ButtonState {
  currentPage: number;
}

const initialState: ButtonState = {
  currentPage: 0,
};

export const SideButtonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = SideButtonSlice.actions;
export default SideButtonSlice.reducer;
