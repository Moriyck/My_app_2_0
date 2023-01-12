import React from 'react'
import ControlPanel from './ControlPanel/ControlPanel'
import Dashboard from './Dashboard/Dashboard'

const TestStand = (props) => {

    let applicationState = props.applicationState

    return (
        <div id="114">
            <div>
                Test Stand
            </div>
            <div>
                < Dashboard
                    applicationState={applicationState}
                    startCounter={props.startCounter}
                />
            </div>
            <div>
                < ControlPanel
                    applicationState={applicationState}
                    startCounter={props.startCounter}
                    onSubmit={props.onSubmit}
                />
            </div>
        </div>
    )
}

export default TestStand
