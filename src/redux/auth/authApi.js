import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";
import Cookies from 'js-cookie';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    loggedIn: builder.mutation({
      query: (data) => ({
        url: `/auth/login`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          Cookies.set('token', JSON.stringify(data), { expires: 1 });
          dispatch(userLoggedIn(data));
        } catch (error) {
          console.error("Login failed: ", error);
        }
      }

    }),

    signUp: builder.mutation({
      query: (data) => ({
        url: `/auth/signup`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          Cookies.set('token', JSON.stringify(data), { expires: 1 });
          dispatch(userLoggedIn(data));
        } catch (error) {
          console.error("signup failed: ", error);
        }
      }

    }),

  }),
});

export const {
  useLoggedInMutation,
  useSignUpMutation
} = authApi;
