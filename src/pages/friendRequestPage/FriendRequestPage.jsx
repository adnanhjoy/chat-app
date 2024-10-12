import React, { useState } from 'react';
import { useGetFriendListQuery, useGetFriendRequestQuery, useGetSentFriendRequestQuery } from '../../redux/friendApi/friendApi';
import FriendSuggestionCard from '../../components/card/FriendSuggestionCard';

const FriendRequestPage = () => {
    const [toggleFriend, setToggleFriend] = useState('receive')
    const { data } = useGetFriendRequestQuery();
    const { data: sentFriend } = useGetSentFriendRequestQuery();

    return (
        <div className='bg-white h-full flex flex-col py-2'>
            <div className='flex-1 overflow-y-auto'>
                <button onClick={() => setToggleFriend('receive')} className={`${toggleFriend === 'receive' ? 'bg-green-800' : 'bg-primary'} text-white px-4 rounded-l text-sm py-2`}>View Receive</button>
                <button onClick={() => setToggleFriend('view')} className={`${toggleFriend === 'view' ? 'bg-green-800' : 'bg-primary'} text-white px-4 rounded-r border-l border-l-gray-500 border-opacity-20 text-sm py-2`}>View Sent</button>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 pr-2 mt-2'>
                    {toggleFriend === 'receive' ?
                        <>
                            {
                                data?.map(user =>
                                    <FriendSuggestionCard
                                        key={user?._id}
                                        user={user}
                                        toggleFriend={toggleFriend}
                                    />
                                )
                            }
                        </> :
                        <>
                            {
                                sentFriend?.map(user =>
                                    <FriendSuggestionCard
                                        key={user?._id}
                                        user={user}
                                        toggleFriend={toggleFriend}
                                    />
                                )
                            }
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default FriendRequestPage;