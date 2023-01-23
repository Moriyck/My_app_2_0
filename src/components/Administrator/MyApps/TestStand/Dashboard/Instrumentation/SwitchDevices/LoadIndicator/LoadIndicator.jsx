import React, { useEffect, useRef } from 'react'
import Speedometer from './SwitchDevices/Speedometer'
const loadIndicator = (props) => {
  
    var canvas = document.getElementById("loadIndicator")
var ctx = canvas.getContext("2d")

var i = 0
var frameDisplayTime = 0
var toX = 0
var number1 = 0
var number2 = 0
var number3 = 0
var number4 = 0
var fillColor = 'red'

let illumination = [
    { //-------------------0
        elementTransparency1: 1,
        elementTransparency2: 1,
        elementTransparency3: 1,
        elementTransparency4: 1,
        elementTransparency5: 1,
        elementTransparency6: 1,
        elementTransparency7: 0.1,
    },
    { //-------------------1
        elementTransparency1: 0.1,
        elementTransparency2: 1,
        elementTransparency3: 1,
        elementTransparency4: 0.1,
        elementTransparency5: 0.1,
        elementTransparency6: 0.1,
        elementTransparency7: 0.1,
    },
    { //-------------------2
        elementTransparency1: 1,
        elementTransparency2: 1,
        elementTransparency3: 0.1,
        elementTransparency4: 1,
        elementTransparency5: 1,
        elementTransparency6: 0.1,
        elementTransparency7: 1,
    },
    { //-------------------3
        elementTransparency1: 1,
        elementTransparency2: 1,
        elementTransparency3: 1,
        elementTransparency4: 1,
        elementTransparency5: 0.1,
        elementTransparency6: 0.1,
        elementTransparency7: 1,
    },
    { //-------------------4
        elementTransparency1: 0.1,
        elementTransparency2: 1,
        elementTransparency3: 1,
        elementTransparency4: 0.1,
        elementTransparency5: 0.1,
        elementTransparency6: 1,
        elementTransparency7: 1,
    },
    { //-------------------5
        elementTransparency1: 1,
        elementTransparency2: 0.1,
        elementTransparency3: 1,
        elementTransparency4: 1,
        elementTransparency5: 0.1,
        elementTransparency6: 1,
        elementTransparency7: 1
    },

    { //-------------------6
        elementTransparency1: 0.1,
        elementTransparency2: 1,
        elementTransparency3: 1,
        elementTransparency4: 1,
        elementTransparency5: 1,
        elementTransparency6: 0.1,
        elementTransparency7: 1
    },
    { //-------------------7
        elementTransparency1: 1,
        elementTransparency2: 1,
        elementTransparency3: 1,
        elementTransparency4: 0.1,
        elementTransparency5: 0.1,
        elementTransparency6: 0.1,
        elementTransparency7: 0.1
    },
    { //-------------------8
        elementTransparency1: 1,
        elementTransparency2: 1,
        elementTransparency3: 1,
        elementTransparency4: 1,
        elementTransparency5: 1,
        elementTransparency6: 1,
        elementTransparency7: 1
    },

    { //-------------------9
        elementTransparency1: 1,
        elementTransparency2: 1,
        elementTransparency3: 1,
        elementTransparency4: 0.1,
        elementTransparency5: 0.1,
        elementTransparency6: 1,
        elementTransparency7: 1
    },
]

function animation1(obj1) {
    const { clear1, update1, render1 } = obj1
    let pTimeStamp1 = 0
    requestAnimationFrame(tick1)

    function tick1(timeStamp1) {
        requestAnimationFrame(tick1)

        const diff1 = timeStamp1 - pTimeStamp1
        pTimeStamp1 = timeStamp1
        const fps1 = 1000 / diff1
        const secondPart1 = diff1 / 1000

        const params1 = {
            timeStamp1,
            pTimeStamp1,
            diff1,
            fps1,
            secondPart1,
        }
        update1(params1)
        clear1()
        render1(params1)
    }
}
var n1 = 0
var n2 = 0
var n3 = 0
var n4 = 0
var n5 = 0
var n6 = 0
var n7 = 0

var STEP = 0
var STEP1 = 0

animation1({
    clear1() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    },
    update1({ timeStamp1, pTimeStamp1, diff1, fps1, secondPart1, }) {
        i += 1
        STEP1 = Math.floor(fps1 * 0.07)
        STEP += 1


        if (STEP > STEP1) {
            STEP = 1
        }

        if (i >= Math.floor(fps1)) {
            i = 0
            //number1 += 1
            // number2 += 1
            // number3 += 1
            number4 += 1
        }

        if (number1 >= 10) {
            number1 = 0
        }
        if (number2 >= 10) {
            number2 = 0
        }
        if (number3 >= 10) {
            number3 = 0
        }
        if (number4 >= 10) {
            number4 = 0
        }

        if (STEP == 1) {
            toX = 0
            n1 = illumination[number1].elementTransparency1
            n2 = illumination[number1].elementTransparency2
            n3 = illumination[number1].elementTransparency3
            n4 = illumination[number1].elementTransparency4
            n5 = illumination[number1].elementTransparency5
            n6 = illumination[number1].elementTransparency6
            n7 = illumination[number1].elementTransparency7
        }

        if (STEP == 2) {
            toX = 24
            n1 = illumination[number2].elementTransparency1
            n2 = illumination[number2].elementTransparency2
            n3 = illumination[number2].elementTransparency3
            n4 = illumination[number2].elementTransparency4
            n5 = illumination[number2].elementTransparency5
            n6 = illumination[number2].elementTransparency6
            n7 = illumination[number2].elementTransparency7
        }

        if (STEP == 3) {
            toX = 45
            n1 = illumination[number3].elementTransparency1
            n2 = illumination[number3].elementTransparency2
            n3 = illumination[number3].elementTransparency3
            n4 = illumination[number3].elementTransparency4
            n5 = illumination[number3].elementTransparency5
            n6 = illumination[number3].elementTransparency6
            n7 = illumination[number3].elementTransparency7
        }

        if (STEP == 4) {
            toX = 66
            n1 = illumination[number4].elementTransparency1
            n2 = illumination[number4].elementTransparency2
            n3 = illumination[number4].elementTransparency3
            n4 = illumination[number4].elementTransparency4
            n5 = illumination[number4].elementTransparency5
            n6 = illumination[number4].elementTransparency6
            n7 = illumination[number4].elementTransparency7
        }
    },
    render1() {
        //-------------------1 сегмент индикатора
        ctx.beginPath()
        ctx.globalAlpha = n1
        ctx.moveTo(2 + toX, 1)
        ctx.lineTo(17 + toX, 1)
        ctx.lineTo(13 + toX, 5)
        ctx.lineTo(6 + toX, 5)
        ctx.lineTo(2 + toX, 1)
        ctx.closePath()
        ctx.fillStyle = fillColor
        ctx.fill()

        //------------------2 сегмент индикатора 
        ctx.beginPath()
        ctx.globalAlpha = n2
        ctx.moveTo(14 + toX, 5)
        ctx.lineTo(18 + toX, 1)
        ctx.lineTo(18 + toX, 16)
        ctx.lineTo(14 + toX, 12)
        ctx.lineTo(14 + toX, 5)
        ctx.closePath()
        ctx.fillStyle = fillColor
        ctx.fill()

        //------------------3 сегмент индикатора 
        ctx.beginPath()
        ctx.globalAlpha = n3
        ctx.moveTo(14 + toX, 21)
        ctx.lineTo(18 + toX, 17)
        ctx.lineTo(18 + toX, 32)
        ctx.lineTo(14 + toX, 28)
        ctx.lineTo(14 + toX, 21)
        ctx.closePath()
        ctx.fillStyle = fillColor
        ctx.fill()

        //------------------4 сегмент индикатора 
        ctx.beginPath()
        ctx.globalAlpha = n4
        ctx.moveTo(6 + toX, 28)
        ctx.lineTo(13 + toX, 28)
        ctx.lineTo(17 + toX, 32)
        ctx.lineTo(2 + toX, 32)
        ctx.lineTo(6 + toX, 28)
        ctx.closePath()
        ctx.fillStyle = fillColor
        ctx.fill()

        //------------------5 сегмент индикатора 
        ctx.beginPath()
        ctx.globalAlpha = n5
        ctx.moveTo(1 + toX, 17)
        ctx.lineTo(5 + toX, 21)
        ctx.lineTo(5 + toX, 28)
        ctx.lineTo(1 + toX, 32)
        ctx.lineTo(1 + toX, 17)
        ctx.closePath()
        ctx.fillStyle = fillColor
        ctx.fill()

        //------------------6 сегмент индикатора 
        ctx.beginPath()
        ctx.globalAlpha = n6
        ctx.moveTo(1 + toX, 1)
        ctx.lineTo(5 + toX, 5)
        ctx.lineTo(5 + toX, 12)
        ctx.lineTo(1 + toX, 16)
        ctx.lineTo(1 + toX, 1)
        ctx.closePath()
        ctx.fillStyle = fillColor
        ctx.fill()

        //------------------7 сегмент индикатора 
        ctx.beginPath()
        ctx.globalAlpha = n7
        ctx.moveTo(5 + toX, 15)  //1
        ctx.lineTo(14 + toX, 15) //2
        ctx.lineTo(17 + toX, 17) //3
        ctx.lineTo(14 + toX, 19) //4
        ctx.lineTo(5 + toX, 19)  //5
        ctx.lineTo(2 + toX, 16)  //6
        ctx.moveTo(5 + toX, 15)  //1
        ctx.closePath()
        ctx.fillStyle = fillColor
        ctx.fill()

        //------------------8 сегмент индикатора (ТОЧКА)
        ctx.beginPath()
        ctx.globalAlpha = 0.3
        ctx.arc(
            44,
            30,
            2.5,
            0,
            Math.PI * 2
        )
        ctx.fillStyle = fillColor
        ctx.fill()

        //------------------(буква A)
        ctx.beginPath()
        ctx.globalAlpha = 0.3
        ctx.font = "28px serif";
        ctx.fillText("A", 84, 30)
        ctx.fillStyle = fillColor
        ctx.fill()
    }
})

    return (
        <div >
     <canvas ref={canvasRef} id="Canvas4" width="250" height="250"></canvas>
        </div>
    )
}

export default loadIndicator
