"use client";

import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "@/utils/createNoopStorage";
import { authReducer } from "./features/auth/authSlice";
import { api } from "./services/api";

const rootReducer = combineReducers({
  auth: persistReducer(
    {
      key: "auth",
      storage: storage,
      blacklist: ["success", "acountWasCreated", "isAuthenticated"],
    },
    authReducer
  ),
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(api.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppSelector = typeof store.getState;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
