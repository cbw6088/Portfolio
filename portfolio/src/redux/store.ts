import { configureStore } from "@reduxjs/toolkit";

import TopBarSlice from "@/feature/bar/TopBarSlice";
import CountSlice from "@/feature/count/CountSlice";
import SideButtonSlice from "@/feature/button/SideButtonSlice";

export const store = configureStore({
    reducer: { 
        counter: CountSlice,
        bar: TopBarSlice,
        button: SideButtonSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
