import React from 'react'

const Ekran = (props) => {
   
    let ekranText = props.ekran.text
    let logStatePin = props.pin[0]
    if (logStatePin === 0) {
        ekranText = props.ekran.text1
    }
    if (logStatePin === 1) {
        ekranText = props.ekran.text2
    }

    return (
        <div id="112121212">
            <textarea value={ekranText}></textarea>
        </div>
    )
}
export default Ekran