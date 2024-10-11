import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
	baseUrl: 'http://localhost:5000/api',
	prepareHeaders: (headers, { getState }) => {
		const token = getState()?.auth?.accessToken;

		if (token) {
			headers.set('Authorization', `Bearer ${token}`);
		}
		return headers;
	},
});

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery,
	endpoints: (builder) => ({
	}),
});

export const { useLazyQuery } = apiSlice;