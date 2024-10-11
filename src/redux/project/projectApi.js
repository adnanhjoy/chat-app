import { apiSlice } from "../api/apiSlice";

export const ourProjectApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        tagTypes: ['Project'],
        //post our Project
        createProject: builder.mutation({
            query: (formData) => ({
                url: `/project`,
                method: "POST",
                body: formData
            }),
            invalidatesTags: ['Project']
        }),

        //get all Project
        getAllProject: builder.query({
            query: () => ({
                url: `/project`,
                method: "GET",
            }),
            providesTags: ['Project']
        }),

        //get single Project
        getSingleProject: builder.query({
            query: (id) => ({
                url: `/project/${id}`,
                method: "GET",
            }),
            providesTags: ['Project']
        }),


        //update single Project
        updateProject: builder.mutation({
            query: ({ id, formData }) => ({
                url: `/project/${id}`,
                method: "PUT",
                body: formData
            }),
            invalidatesTags: ['Project']
        }),


        //delete single Project
        deleteProject: builder.mutation({
            query: (id) => ({
                url: `/project/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Project']
        }),


        //get project with teammembers
        getProjectWithTeamMembers: builder.query({
            query: (id) => ({
                url: `/project/${id}/team-members`,
                method: "GET",
            }),
            invalidatesTags: ['Project']
        }),


        //assign project with teammembers
        assignProjectWithTeamMembers: builder.mutation({
            query: (data) => ({
                url: `/project/teamProject`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Project']
        }),

    }),
});

export const {
    useCreateProjectMutation,
    useGetAllProjectQuery,
    useUpdateProjectMutation,
    useDeleteProjectMutation,
    useGetSingleProjectQuery,
    useGetProjectWithTeamMembersQuery,
    useAssignProjectWithTeamMembersMutation
} = ourProjectApi;
