import React, { useEffect, useRef } from 'react'
import classes from './Dashboard.module.css'

const Dashboard = (props) => {

    let counterD = props.counterD

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

    props.startCounter(counterD)

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

        arrowValueIndex = counterD
        
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
        [counterD]
    )

    return (
        <div id="114">
            <div>
                Dashboard {arrowValueIndex}" "{middleY} {middleX}
            </div>
            <div className={classes.dashboard}>
                <canvas ref={canvasRef} id="Canvas4" width="250" height="250"></canvas>
            </div>
        </div>
    )
}

export default Dashboard
