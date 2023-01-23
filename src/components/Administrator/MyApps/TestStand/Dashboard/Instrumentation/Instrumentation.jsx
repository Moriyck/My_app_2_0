import React, { useEffect, useRef } from 'react'
import Speedometer from './SwitchDevices/Speedometer'
const Instrumentation = (props) => {
  
    return (
        <div >
            <Speedometer
            applicationState={props.applicationState}
            startCounter={props.startCounter}
            />
        </div>
    )
}

export default Instrumentation
