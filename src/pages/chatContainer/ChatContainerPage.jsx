import React, { useState, useEffect, useRef } from 'react';
import ChatHead from '../../components/chatContainer/ChatHead';
import ChatFooter from '../../components/chatContainer/ChatFooter';
import ChatProfile from '../../components/profile/ChatProfile';
import { useParams } from 'react-router-dom';
import { useGetMessageQuery, useSendMessageMutation } from '../../redux/messegeApi/messegeApi';
import { useSelector } from 'react-redux';
import { useGetSingleFriendQuery } from '../../redux/friendApi/friendApi';
import { io } from 'socket.io-client';

const socket = io("http://localhost:5000");
// const socket = io("https://apifindchat.vercel.app");

const ChatContainerPage = () => {
    const { receiverId } = useParams();
    const [seeProfile, setSeeProfile] = useState(true);
    const [messages, setMessages] = useState([]);
    const { data: initialMessages } = useGetMessageQuery(receiverId);
    const { data: singleFriend } = useGetSingleFriendQuery(receiverId);
    const [sendMessage] = useSendMessageMutation();
    const { user } = useSelector((state) => state?.auth);

    const messagesEndRef = useRef(null);
    useEffect(() => {
        if (initialMessages) {
            setMessages(initialMessages);
        }
        socket.on('receive_message', (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });

        return () => {
            socket.off('receive_message');
        };
    }, [initialMessages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        const content = e.target.content.value;
        const sendData = {
            receiverId,
            content,
            sender: user._id
        };

        socket.emit('send_message', sendData);
        await sendMessage(sendData);
        e.target.reset();
    };

    return (
        <div className='h-screen flex py-2 gap-2 pr-2'>
            <div className='flex-1 bg-white border rounded-lg flex flex-col'>
                {/* Chat Header */}
                <ChatHead
                    singleFriend={singleFriend}
                    seeProfile={seeProfile}
                    setSeeProfile={setSeeProfile}
                />

                {/* Chat Messages Container */}
                <div className='flex-1 overflow-y-auto p-2 my-2'>
                    {messages?.map(message => {
                        const isSender = message?.sender?._id === user?._id;

                        if (isSender) {
                            return (
                                <div key={message?._id} className='flex items-end justify-end my-2'>
                                    <div className='bg-primary text-sm max-w-xs py-2 px-4 rounded-lg text-white break-words'>
                                        <p>{message?.content}</p>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div key={message?._id} className='bg-gray-200 text-sm w-fit max-w-xs py-2 px-4 rounded-lg break-words my-2'>
                                    <p>{message?.content}</p>
                                </div>
                            );
                        }
                    })}
                    <div ref={messagesEndRef} />
                </div>

                {/* Chat Footer */}
                <ChatFooter handleSendMessage={handleSendMessage} />
            </div>

            {/* Sidebar */}
            {seeProfile && (
                <div className='w-1/3 h-full'>
                    <ChatProfile singleFriend={singleFriend} />
                </div>
            )}
        </div>
    );
};

export default ChatContainerPage;
