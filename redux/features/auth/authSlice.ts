import { authApi } from "@/redux/services/authApi";
import { Reducer, createSlice } from "@reduxjs/toolkit";

export interface AuthStatePayload {
  loading: boolean;
  success: boolean;
  error: string | false | null;
  message: string | null;
  accountWasCreated: boolean | null;
  isAuthenticated: boolean | null;
  token: string | null;
  email: string | null;
  isAdmin: boolean | null;
}

export const initialAuthState: AuthStatePayload = {
  loading: false,
  success: false,
  error: null,
  message: "",
  accountWasCreated: false,
  isAuthenticated: false,
  token: "",
  email: "",
  isAdmin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    resetAuth: (state) => {
      state.success = false;
      state.isAuthenticated = false;
      state.accountWasCreated = false;
      state.isAdmin = false;
      state.token = null;
      state.loading = false;
    },
    resetAuthError: (state) => {
      state.error = null;
      state.message = null;
      state.loading = false;
    },
    resetAuthSuccess: (state) => {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state: any, { payload }: any) => {
          state.isAuthenticated = payload.isAuthenticated;
          state.token = payload.token;
          state.isAdmin = payload.isAdmin;
          state.email = payload.email;
        }
      )
      .addMatcher(
        authApi.endpoints.register.matchFulfilled,
        (state: any, { payload }: any) => {
          state.accountWasCreated = payload.accountWasCreated;
          state.token = payload.token;
          state.isAdmin = payload.isAdmin;
        }
      )
      .addMatcher(
        (action: any) =>
          action.type.endsWith("/rejected") &&
          action.payload?.data?.sliceName === "authApi",
        (state: any, action: any) => {
          state.loading = false;
          state.error = action.payload.data;
        }
      );
  },
});

export const authReducer = authSlice.reducer as Reducer<AuthStatePayload>;

export const { resetAuth, resetAuthError, resetAuthSuccess } =
  authSlice.actions;
