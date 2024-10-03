import { createSlice } from "@reduxjs/toolkit";

interface BarState {
    isVisible: boolean;
    barType: 'Home' | null;
}

const initialState: BarState = {
    isVisible: false,
    barType: null,
};

const TopBarSlice = createSlice({
    name: 'bar',
    initialState,
    reducers: {
        showBar(state, action) { 
            state.isVisible = true;
            state.barType = action.payload;
          },
        hideBar(state) { 
            state.isVisible = false;
            state.barType = null;
        },
    }
})

export const { showBar, hideBar } = TopBarSlice.actions;
export default TopBarSlice.reducer;