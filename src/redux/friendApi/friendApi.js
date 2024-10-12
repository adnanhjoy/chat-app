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


        //get sent friend request
        getSentFriendRequest: builder.query({
            query: () => ({
                url: `/friend/sent-request`,
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


        //get friend list
        getSingleFriend: builder.query({
            query: (friendId) => ({
                url: `/friend/${friendId}`,
                method: "GET",
            }),
            providesTags: ['Friend']
        }),


        //get friend user
        getAllUsers: builder.query({
            query: () => ({
                url: `/friend/all`,
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
    useGetSentFriendRequestQuery,
    useGetFriendListQuery,
    useGetSingleFriendQuery,
    useGetAllUsersQuery,
} = friendsApi;
