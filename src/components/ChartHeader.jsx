import React from 'react'

const ChartHeader = ({category, title}) => {
  return (
    <div className='mb-10 md:mt-0 mt-12'>
      <p className="text-gray-400 dark:text-white">
        {category}
      </p>
      <p className='text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white'>{title}</p>
    </div>
  )
}

export default ChartHeader