import { configureStore } from "@reduxjs/toolkit";

import TopBarSlice from "@/feature/bar/TopBarSlice";
import CountSlice from "@/feature/count/CountSlice";
import SideButtonSlice from "@/feature/button/SideButtonSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      counter: CountSlice,
      bar: TopBarSlice,
      button: SideButtonSlice,
    },
  });
}

export type Store = ReturnType<typeof makeStore>;
export type RootState = ReturnType<Store["getState"]>;
export type AppDispatch = Store["dispatch"];

// Pages Router _app.tsx용 (App Router는 ReduxProvider에서 makeStore 사용)
export const store = makeStore();
