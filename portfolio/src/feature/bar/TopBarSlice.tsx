import { createSlice } from "@reduxjs/toolkit";

interface BarState {
    isVisible: boolean;
    barType: 'Home' | 'Introduction' | 'Project' | null;
}

const initialState: BarState = {
    isVisible: true,
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