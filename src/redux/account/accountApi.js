import { apiSlice } from "../api/apiSlice";

export const accountApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    tagTypes:['User'],
    // get user information by email
    getLoggedInUserInfoByEmail: builder.query({
      query: (userEmail) => ({
        url: `/user/${userEmail}`,
        method: "POST",
      }),
      providesTags:['User']
    }),
    // post user information by email
    updateUserInformationByEmail: builder.mutation({
      query: ({ userEmail, formData }) => ({
        url: `/user/${userEmail}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags:['User']
    }),
  }),
});

export const {
  useGetLoggedInUserInfoByEmailQuery,
  useUpdateUserInformationByEmailMutation,
} = accountApi;
