import React, { useEffect, useRef } from 'react'
//import classes from './ControlPanel.module.css'

const ControlPanel = (props) => {

    let counter = props.counter
   
        props.startCounter(counter)
    
    const canvasRef = useRef(null)
    useEffect((
        x = 0,
        y = 0,
        width = counter * 3,
        height = 30,
        size = 18,
        text = counter + ' %',
        textFont = size + 'px serif'
    ) => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        context.clearRect(0, 0, width, height)
        context.globalAlpha = 1
        context.fillStyle = `red`
        context.fillRect(x, y, width, height)
        context.fillStyle = `green`
        context.font = textFont
        context.fillText(text, width - (width * 0.4), 20)

    },
        [counter]
    )

    return (
        <div id="114">
            <div>
                ControlPanel {counter}
            </div>
            <div /*className={classes.ControlPanel}*/>
                <canvas ref={canvasRef} id="Canvas4" width="250" height="250"></canvas>
            </div>
        </div>
    )
}

export default ControlPanel
