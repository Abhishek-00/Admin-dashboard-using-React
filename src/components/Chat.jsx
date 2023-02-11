import React from 'react'
import { motion } from 'framer-motion';
import { MdOutlineCancel } from 'react-icons/md';

import Button from './Button';

import { chatData } from '../data/dummy';

import { useStateContext } from '../contexts/ContextProvider'


const Chat = () => {
  const { currentColor, setIsClicked } = useStateContext()


  return (
    <motion.div
      transition={{ type: "tween", duration: 0.1 }}
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 1000, opacity: 0 }}
      exit={{ y: 200 }}
      className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      <div className={`absolute right-5 md:right-56 top-14 border-1 dark:border-${currentColor} border-${currentColor} rounded-lg dark:bg-secondary-dark-bg dark:text-gray-200 bg-white dark:[#484B52] transition-all w-96`} >
        <div className="flex justify-between items-center p-4 ml-4">
          <p className='font-semibold text-xl'>Message  <em><sup>5 new</sup></em></p>
          <button
            type='button'
            onClick={() => setIsClicked(false)}
            style={{ color: 'rgb(153, 171, 180', borderRadius: '50%' }}
            className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
          >
            <MdOutlineCancel />
          </button>
        </div>

        {chatData.map((item, index) => (
          <div key={index}>
            <div className="flex">
              <div className="flex justify-start items-center mx-4 my-2 hover:bg-slate-100 dark:hover:bg-main-dark-bg rounded-lg pb-1 pt-1 w-full">
                <div className="flex flex-row items-center justify-center px-5 cursor-pointer">
                  <img className='rounded-full h-12 w-12' src={item.image} alt="" />
                  <div className="flex justify-center flex-col px-4">
                    <p className=' text-black font-semibold dark:text-white'>{item.message}</p>
                    <p className='text-gray-600 dark:text-gray-400 text-sm font-semibold mt-1'>{item.desc}</p>
                    <div className="flex items-center ">
                      <p className='text-gray-600 dark:text-gray-400 text-sm font-semibold'>{item.time}</p>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}


        <div className="mt-3 mb-3 mx-8">

          <div className="flex items-center justify-center my-6">
            <Button
              color='white'
              bgColor={currentColor}
              text='See all messages'
              borderRadius="10px"
              size='md'
              width='full'
            />

          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default Chat