import React from 'react';
import avatar from '../../assets/avatar.webp'
import { useAcceptFriendRequestMutation, useSendFriendRequestMutation } from '../../redux/friendApi/friendApi';

const FriendSuggestionCard = ({ user, toggleFriend }) => {
    const { _id, name, status, sender, receiver } = user || {};
    const [addFriend,] = useSendFriendRequestMutation();
    const [acceptFriend,] = useAcceptFriendRequestMutation();

    const handleSubmit = () => {
        if (status) {
            acceptFriend({ requestId: _id })
        } else {
            addFriend({ receiverId: _id })
        }
    }

    return (
        <div className='border rounded-md'  >
            <img className='w-full' src={avatar} alt="avatar" />
            <div className='p-1'>
                <h3 className='font-medium text-center my-2'>
                    {sender?.name ? sender.name : receiver?.name ? receiver.name : name}
                </h3>

                <button onClick={handleSubmit} className='bg-primary hover:bg-green-500 text-white text-sm w-full rounded py-2'>
                    {
                        toggleFriend === 'receive' ?
                            (status === 'pending' ? 'Confirm' : 'Add Friend') :
                            (status === 'pending' ? 'Sent Request' : 'Add Friend')
                    }
                </button>
                {
                    status === 'pending' &&
                    <button className='bg-gray-300 hover:bg-gray-200 text-black text-sm w-full rounded py-2 mt-1'>Remove</button>
                }
            </div>
        </div>
    );
};

export default FriendSuggestionCard;