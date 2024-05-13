import React from 'react';
import ChatHead from '../../components/chatContainer/ChatHead';
import ChatFooter from '../../components/chatContainer/ChatFooter';

const ChatContainerPage = () => {
    return (
        <div className='min-h-screen relative'>
            <ChatHead />
            <div className='max-h-[78vh] overflow-auto p-2 my-2'>
                {
                    Array(20).fill().map((_, idx) => {
                        if (idx % 2 === 1) {
                            return (
                                <div key={idx} className='bg-gray-200 text-sm w-fit py-1 px-3 rounded-full text-black'>
                                    <p>Hello ! Adnan, How are you ?</p>
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
            <ChatFooter />
        </div>
    );
};

export default ChatContainerPage;