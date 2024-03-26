import { configureStore } from "@reduxjs/toolkit";
import { doorManagerApi } from "./features/api/doorAPI";
import { setupListeners } from "@reduxjs/toolkit/query";
import doorSliceReducer from "./features/reducer/doorManagementSlice";

export const store = configureStore({
  reducer: {
    [doorManagerApi.reducerPath]: doorManagerApi.reducer,
    door: doorSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(doorManagerApi.middleware),
});

setupListeners(store.dispatch);
