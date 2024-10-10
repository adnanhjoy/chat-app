import React from 'react';
import { BsEmojiSmileFill } from 'react-icons/bs';
import { IoMdImage } from 'react-icons/io';
import { MdKeyboardVoice, MdSend } from 'react-icons/md';
import { TiAttachment } from 'react-icons/ti';

const ChatFooter = () => {
    return (
        <div className='py-4 border-t w-full flex items-center justify-between bg-white px-2'>
            <div className='flex items-center gap-x-4 text-primary'>
                <TiAttachment className='text-2xl rounded-full cursor-pointer' />
                <IoMdImage className='text-xl rounded-full cursor-pointer' />
                <MdKeyboardVoice className='text-xl rounded-full cursor-pointer' />
            </div>
            <form className='flex items-center justify-between border rounded-full w-full'>
                <input type="text" className='w-full rounded-full outline-none py-2 px-4 placeholder:text-sm placeholder:font-light' placeholder='Enter Message' />
                <BsEmojiSmileFill className='text-xl text-primary mr-2 cursor-pointer' />
            </form>
            <button className='bg-primary text-white px-4 py-2.5 rounded ml-2'>
                <MdSend className='cursor-pointer' />
            </button>
        </div>
    );
};

export default ChatFooter;