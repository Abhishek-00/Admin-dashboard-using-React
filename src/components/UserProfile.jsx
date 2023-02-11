import React from 'react'
import { motion } from 'framer-motion';
import { MdOutlineCancel } from 'react-icons/md';

import Button from './Button';

import { userProfileData } from '../data/dummy';
import avatar from '../data/avatar.jpg';

import { useStateContext } from '../contexts/ContextProvider'


const UserProfile = () => {
  const { currentColor, setIsClicked } = useStateContext()


  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      <motion.div
        transition={{ type: "tween", duration:0.1}}
        animate={{ y:0, opacity:1 }}
        initial={{  y:1000, opacity:0 }}
        exit={{ y:200}}
        className={`absolute right-5 md:right-10 top-14 border-1 dark:border-${currentColor} rounded-lg dark:bg-secondary-dark-bg dark:text-gray-200 bg-white dark:[#484B52] transition-all w-96`}
      >
        <div className="flex justify-between items-center p-4 ml-4">
          <p className='font-semibold text-xl'>User Profile</p>
          <button
            type='button'
            onClick={() => setIsClicked(false)}
            style={{ color: 'rgb(153, 171, 180', borderRadius: '50%' }}
            className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className='flex flex-row justify-center items-center m-5'>
          <img className='rounded-full h-24 w-24' src={avatar} alt="" />
          <div className="flex justify-center flex-col px-4">
            <p className=' text-black text-xl font-semibold dark:text-white'>Kunal Kapoor</p>
            <p className='text-gray-600 dark:text-gray-400 text-sm font-semibold mt-1'>Administrator</p>
            <div className="flex items-center ">
              <p className='text-gray-600 dark:text-gray-400 text-sm font-semibold'>info@shoppy.com</p>

            </div>
          </div>

        </div>





        {userProfileData.map((item, index) => (
          <div key={index}>
            <div className="flex">
              <div className={`flex justify-start items-center m-4 hover:bg-slate-100 dark:hover:bg-main-dark-bg rounded-lg pb-2 w-full`}>
                <div className="flex flex-row items-center justify-center px-5 pt-2 cursor-pointer">
                  <button
                    className='text-xl rounded-lg p-3 hover:bg-light-gray'
                    style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                  >
                    {item.icon}
                  </button>
                  <div className="flex justify-center flex-col px-4">
                    <p className=' text-black font-semibold dark:text-white'>{item.title}</p>
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
              text='Logout'
              borderRadius="10px"
              size='md'
              width='full'
            />

          </div>
        </div>

      </motion.div>
    </div >
  )
}

export default UserProfile