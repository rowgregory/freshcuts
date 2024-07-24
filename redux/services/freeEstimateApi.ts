import { api } from "./api";

const BASE_URL = "/free-estimate";

export const freeEstimateApi = api.injectEndpoints({
  endpoints: (build: any) => ({
    createFreeEstimate: build.mutation({
      query: (body: any) => ({
        url: `${BASE_URL}?endpoint=CREATE_FREE_ESTIMATE`,
        method: "POST",
        body,
      }),
    }),
    getFreeEstimates: build.query({
      query: () => `${BASE_URL}?endpoint=GET_FREE_ESTIMATES`,
      providesTags: ["Free Estimate"],
    }),
    getFreeEstimate: build.query({
      query: () => `${BASE_URL}?endpoint=GET_FREE_ESTIMATE`,
      providesTags: ["Free Estimate"],
    }),
  }),
});

export const {
  useCreateFreeEstimateMutation,
  useGetFreeEstimatesQuery,
  useGetFreeEstimateQuery,
} = freeEstimateApi;
