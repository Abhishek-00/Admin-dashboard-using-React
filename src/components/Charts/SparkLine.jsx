import React from 'react'


import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import { SparklineAreaData } from '../../data/dummy'

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {

  return (<>
   
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      fill={color}
      valueType='Category'
      dataSource={ SparklineAreaData }
      lineWidth={1}
      border={{ color: currentColor, width: 2 }}
      xName='x'
      yName='yval'
      type={type}
    tooltipSettings={{
      visible: true,
      format: 'र्{x} : data र्{y}',
      trackLineSettings: {
        visible: true
      }
    }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  </>
  )
}

export default SparkLine