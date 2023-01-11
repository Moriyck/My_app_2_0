import React, { useEffect, useRef } from 'react'
import ControlPanel from './ControlPanel/ControlPanel'
import Dashboard from './Dashboard/Dashboard'

const TestStand = (props) => {
   
    let counter = props.applicationState.counter
    
    return (
        <div id="114">
            <div>
                Test Stand {counter}
            </div>
            <div>
                < Dashboard
                    counterD={counter}
                    startCounter={props.startCounter}
                />
            </div>
            <div>
                <div>
                    <ControlPanel
                        counterC={counter}
                        startCounter={props.startCounter}
                    />
                </div>
            </div>

        </div>
    )
}

export default TestStand
