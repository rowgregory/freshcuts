import { invoiceApi } from "@/redux/services/invoiceApi";
import { Reducer, createSlice } from "@reduxjs/toolkit";

export interface InvoiceStatePayload {
  loading: boolean;
  success: boolean;
  error: string | false | null;
  message: string | null;
  invoices: [] | null;
  customers: [] | null;
  invoice: {} | null;
}

export const initialInvoiceState: InvoiceStatePayload = {
  loading: false,
  success: false,
  error: null,
  message: "",
  invoices: [],
  customers: [],
  invoice: {},
};

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState: initialInvoiceState,
  reducers: {
    resetInvoice: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.message = null;
      state.invoices = null;
      state.invoice = null;
    },
    resetInvoiceError: (state) => {
      state.error = null;
      state.message = null;
      state.loading = false;
    },
    resetInvoiceSuccess: (state) => {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        invoiceApi.endpoints.createInvoice.matchFulfilled,
        (state: any, { payload }: any) => {
          state.message = payload.message;
        }
      )
      .addMatcher(
        invoiceApi.endpoints.getInvoices.matchFulfilled,
        (state: any, { payload }: any) => {
          state.invoices = payload.invoices;
        }
      )
      .addMatcher(
        invoiceApi.endpoints.getCustomers.matchFulfilled,
        (state: any, { payload }: any) => {
          state.customers = payload.customers;
        }
      )
      .addMatcher(
        invoiceApi.endpoints.getMyInvoices.matchFulfilled,
        (state: any, { payload }: any) => {
          state.invoices = payload.invoices;
        }
      )
      .addMatcher(
        (action: any) =>
          action.type.endsWith("/rejected") &&
          action.payload?.data?.sliceName === "invoiceApi",
        (state: any, action: any) => {
          state.loading = false;
          state.error = action.payload.data;
        }
      );
  },
});

export const invoiceReducer =
  invoiceSlice.reducer as Reducer<InvoiceStatePayload>;

export const { resetInvoice, resetInvoiceError, resetInvoiceSuccess } =
  invoiceSlice.actions;
