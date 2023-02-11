import React from 'react'

import { ChartHeader, LineChart } from '../../components'


const Line = () => {
  return (
    <div className='m-4 md:m-10 w-full mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartHeader category='Chart' title="Inflation Rate" />

      <div className="w-full">
        <LineChart />
      </div>

    </div>
  )
}

export default Line