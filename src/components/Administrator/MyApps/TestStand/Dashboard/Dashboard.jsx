import React, { useEffect, useRef } from 'react'
import classes from './Dashboard.module.css'
import Instrumentation from './Instrumentation/Instrumentation'

const Dashboard = (props) => {
    return (
        <div id="114">
            <div>
                Dashboard
            </div>
            <div className={classes.fourColumns}>
                <Instrumentation
                    applicationState={props.applicationState}
                    startCounter={props.startCounter}
                />
            </div>

        </div>
    )
}

export default Dashboard
