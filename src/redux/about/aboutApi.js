import { apiSlice } from "../api/apiSlice";

export const ourTeamApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        tagTypes: ['Team'],
        //post our team
        createTeam: builder.mutation({
            query: (formData) => ({
                url: `/team`,
                method: "POST",
                body: formData
            }),
            invalidatesTags: ['Team']
        }),

        //get all team
        getAllTeam: builder.query({
            query: () => ({
                url: `/team`,
                method: "GET",
            }),
            providesTags: ['Team']
        }),

        //get single team
        getSingleTeam: builder.query({
            query: (id) => ({
                url: `/team/${id}`,
                method: "GET",
            }),
            providesTags: ['Team']
        }),


        //update single Team
        updateTeam: builder.mutation({
            query: (id, formData) => ({
                url: `/team/${id}`,
                method: "PUT",
                body: formData
            }),
            invalidatesTags: ['Team']
        }),


        //delete single team
        deleteTeam: builder.mutation({
            query: (id) => ({
                url: `/team/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Team']
        }),

    }),
});

export const {
    useCreateTeamMutation,
    useGetAllTeamQuery,
    useUpdateTeamMutation,
    useDeleteTeamMutation,
    useGetSingleTeamQuery,
} = ourTeamApi;
