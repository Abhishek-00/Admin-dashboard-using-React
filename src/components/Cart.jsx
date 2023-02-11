import React from 'react'
import { motion } from 'framer-motion';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import Button from './Button';

import { cartData } from '../data/dummy'

import { useStateContext } from '../contexts/ContextProvider'


const Cart = () => {
  const { currentColor, setIsClicked } = useStateContext()


  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ x: 500, opacity: 0.5 }}
        exit={{ opacity: 0, x: 500 }}
        transition={{ type: "tween", duration: 0.1 }}
        className={`float-right h-screen dark:bg-secondary-dark-bg dark:text-gray-200 bg-white dark:[#484B52] transition-all w-400`} >
        <div className="flex justify-between items-center p-4 ml-4">
          <p className='font-semibold text-xl'>Shopping Cart</p>
          <button
            type='button'
            onClick={() => setIsClicked(false)}
            style={{ color: 'rgb(153, 171, 180', borderRadius: '50%' }}
            className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
          >
            <MdOutlineCancel />
          </button>
        </div>

        {cartData.map((item, index) => (
          <div key={index}>
            <div className="flex mx-6">
              <div className="flex justify-start items-center m-4">
                <div className="flex flex-row">
                  <img className='m-4 rounded-lg h-80 w-24' src={item.image} alt="" />
                  <div className="flex justify-center flex-col ">
                    <p className=' text-black font-semibold dark:text-white'>{item.name}</p>
                    <p className='text-gray-600 dark:text-gray-400 text-sm font-semibold mt-2'>{item.category}</p>
                    <div className="flex gap-4 mt-2 items-center ">
                      <p className='text-lg font-semibold'>{item.price}</p>
                      <div className="flex items-center border-1 border-r-0 border-color rounded">
                        <p className="cursor-pointer p-2 border-r-1 dark:border-gray-600 border-color text-red-600 "><AiOutlineMinus /></p>
                        <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">0</p>
                        <p className="cursor-pointer p-2 border-r-1 border-color dark:border-gray-600 text-green-600"><AiOutlinePlus /></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-3 mb-3 mx-8">
          <div className="flex justify-between my-2">
            <p className='text-gray-500 dark:text-gray-200 font-bold'>Sub Total</p>
            <p className='font-semibold'>र् 890</p>
          </div>
          <div className="flex justify-between my-2">
            <p className='text-gray-500 dark:text-gray-200 font-bold'>Total</p>
            <p className='font-semibold'>र् 890</p>
          </div>
          <div className="flex items-center justify-center mt-4">
            <Button
              color='white'
              bgColor={currentColor}
              text='Place Order'
              borderRadius="10px"
              size='md'
              width='full'
            />

          </div>
        </div>

      </motion.div>
    </div>
  )
}

export default Cart