import React, { useEffect, useRef } from 'react'
import ControlPanelElements from './ControlPanelElements/ControlPanelElements'


const ControlPanel = (props) => {

    let elements = < ControlPanelElements
        name={'тяга'}
        Element={'text'}
        applicationState={props.applicationState}
        onSubmit={props.onSubmit}
    />

    return (
        <div id="114">
            <div>
                Control Panel
            </div>
            <div >
                {elements}
            </div>
        </div>
    )
}

export default ControlPanel
