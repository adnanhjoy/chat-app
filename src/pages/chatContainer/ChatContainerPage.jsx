import React from 'react';
import ChatHead from '../../components/chatContainer/ChatHead';
import ChatFooter from '../../components/chatContainer/ChatFooter';
import ChatProfile from '../../components/profile/ChatProfile';

const ChatContainerPage = () => {
    return (
        <div className='grid grid-cols-7 gap-2'>
            <div className='col-span-5 h-full py-2'>
                <div className='bg-white border rounded-lg h-screen flex flex-col'>
                    {/* Chat Header */}
                    <ChatHead />

                    {/* Chat Messages Container */}
                    <div className='flex-1 overflow-y-auto p-2 my-2'>
                        {
                            Array(20).fill().map((_, idx) => {
                                if (idx % 2 === 1) {
                                    return (
                                        <div key={idx} className='bg-gray-200 text-sm w-fit py-1 px-3 rounded-full text-black'>
                                            <p>Hello! Adnan, how are you?</p>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div className='flex items-center justify-end my-2'>
                                            <div key={idx} className='bg-primary text-sm w-fit py-1 px-3 rounded-full text-white'>
                                                <p>How can I help you today?</p>
                                            </div>
                                        </div>
                                    );
                                }
                            })
                        }
                    </div>

                    {/* Chat Footer*/}
                    <ChatFooter />
                </div>
            </div>
            <div className='col-span-2 h-full py-2 pr-2'>
                <ChatProfile />
            </div>
        </div>
    );
};

export default ChatContainerPage;
