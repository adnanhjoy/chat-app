import { apiSlice } from "../api/apiSlice";

export const friendsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        tagTypes: ['Friend'],

        //send message
        sendMessage: builder.mutation({
            query: (data) => ({
                url: `/message/send`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Friend']
        }),


        //get message
        getMessage: builder.query({
            query: (receiverId) => ({
                url: `/message/receive/${receiverId}`,
                method: "GET",
            }),
            providesTags: ['Friend']
        }),


    }),
});

export const {
    useSendMessageMutation,
    useGetMessageQuery,
} = friendsApi;
