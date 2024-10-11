import React from 'react';
import { useGetFriendListQuery, useGetFriendRequestQuery } from '../../redux/friendApi/friendApi';
import FriendSuggestionCard from '../../components/card/FriendSuggestionCard';

const FriendRequestPage = () => {
    const { data } = useGetFriendRequestQuery();

    return (
        <div className='bg-white h-full flex flex-col py-2'>
            <div className='flex-1 overflow-y-auto'>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 pr-2'>
                    {
                        data?.map(user =>
                            <FriendSuggestionCard
                                key={user?._id}
                                user={user}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default FriendRequestPage;