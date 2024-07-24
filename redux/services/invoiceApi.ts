import { api } from "./api";

const BASE_URL = "/invoice";

export const invoiceApi = api.injectEndpoints({
  endpoints: (build: any) => ({
    createInvoice: build.mutation({
      query: (body: any) => ({
        url: `${BASE_URL}?endpoint=CREATE_INVOICE`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Invoice"],
    }),
    getInvoices: build.query({
      query: () => `${BASE_URL}?endpoint=GET_INVOICES`,
      providesTags: ["Invoice"],
    }),
    getCustomers: build.query({
      query: () => `${BASE_URL}?endpoint=GET_CUSTOMERS`,
      provideTags: ["Invoice"],
    }),
    getMyInvoices: build.query({
      query: (email: string) => `${BASE_URL}/${email}?endpoint=GET_MY_INVOICES`,
      provideTags: ["Invoice"],
    }),
  }),
});

export const {
  useCreateInvoiceMutation,
  useGetInvoicesQuery,
  useGetCustomersQuery,
  useGetMyInvoicesQuery,
} = invoiceApi;
