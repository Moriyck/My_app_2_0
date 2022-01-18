import React, { useEffect, useRef } from 'react'

const SecondPreloader = (props) => {
    let preloader = props.preloaderState.preloader
    let counter = props.preloaderState.counter

    if (preloader < 100) {
        props.startCounter(preloader, counter)
    }

    const canvasRef = useRef(null)
    useEffect((
        x = 0,
        y = 0,
        width = 100,
        height = 10
    ) => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        context.fillStyle = `red`
        context.fillRect(x, y, width, height)
    },
        []
    )

    return (
        <div id="114">
            <canvas ref={canvasRef} id="myCanvas" width="100" height="10 "></canvas>
            Test systems: {counter}  %
        </div>
    )
}

export default SecondPreloader