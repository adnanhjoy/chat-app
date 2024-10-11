import { apiSlice } from "../api/apiSlice";

export const friendsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        tagTypes: ['Friend'],

        //add friend request
        sendFriendRequest: builder.mutation({
            query: (data) => ({
                url: `/friend/request`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Friend']
        }),


        //accept friend request
        acceptFriendRequest: builder.mutation({
            query: (data) => ({
                url: `/friend/accept`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Friend']
        }),

        //get friend request
        getFriendRequest: builder.query({
            query: () => ({
                url: `/friend/request`,
                method: "GET",
            }),
            providesTags: ['Friend']
        }),


        //get friend list
        getFriendList: builder.query({
            query: () => ({
                url: `/friend/friendlist`,
                method: "GET",
            }),
            providesTags: ['Friend']
        }),


    }),
});

export const {
    useSendFriendRequestMutation,
    useAcceptFriendRequestMutation,
    useGetFriendRequestQuery,
    useGetFriendListQuery,
} = friendsApi;
