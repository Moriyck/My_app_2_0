import React, { useEffect, useRef } from 'react'
import classes from './Speedometer.module.css'

const Speedometer = (props) => {

    let counter = props.applicationState.counter
    let arow = props.applicationState.arow
    let thrust = props.applicationState.thrust

    if (arow < thrust) {
        props.startCounter(counter, arow + 0.01)
    }

    if (arow > thrust) {
        props.startCounter(counter, arow - 0.01)
    }

    // general settings
    let middleX = 0
    let middleY = 0
    let radius = 0

    // Arrow settings
    let arrowValueIndex = 0
    let arrowColor = "#464646"
    let arrowWidth = 0

    let arrowAngle = 0
    let toX = 0
    let toY = 0

    const canvasRef = useRef(null)
    useEffect((
        x = 0,
        y = 0,
        width = 300,
        height = 30,
    ) => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        middleX = canvas.width / 2
        middleY = canvas.height / 2
        radius = canvas.width / 2 - canvas.width / 12
        arrowWidth = canvas.width / 50

        arrowValueIndex = arow

        arrowAngle = arrowValueIndex * Math.PI
        toX = middleX + (radius) * Math.cos(arrowAngle)
        toY = middleY + (radius) * Math.sin(arrowAngle)

        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.beginPath()
        ctx.moveTo(middleX, middleY)
        ctx.lineTo(toX, toY)
        ctx.strokeStyle = arrowColor
        ctx.lineWidth = arrowWidth
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(
            middleX,
            middleY,
            8,
            0,
            Math.PI * 2
        )
        ctx.fillStyle = arrowColor
        ctx.fill()
    },
        [counter]
    )

    return (
        <div className={classes.speedometer}>
            <canvas ref={canvasRef} id="Canvas4" width="250" height="250"></canvas>
        </div>
    )
}

export default Speedometer
