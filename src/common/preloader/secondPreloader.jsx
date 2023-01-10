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
        width = counter * 3,
        height = 30,
        size = 18,
        text = counter + ' %',
        textFont = size + 'px serif'
    ) => {
        console.log(counter)
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')


        //context.clearRect(0, 0, width, height)

        context.globalAlpha = counter * 0.1
        context.fillStyle = `red`
        context.fillRect(x, y, width, height)
        context.fillStyle = `green`
        context.font = textFont
        context.fillText(text, width - (width * 0.5), 20)



    },
        [counter]
    )
    return (
        <div id="114">
            <canvas ref={canvasRef} id="myCanvas" width={counter * 3} height="30"></canvas>
        </div>
    )
}

export default SecondPreloader