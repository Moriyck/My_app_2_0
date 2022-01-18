import React from 'react'
import Ekran from './Ekran/Ekran'

const Panel = (props) => {
    let namberPin = 21
    let logStatePin = props.developmentSvimPage.pin[namberPin]
    let newLogStatePin = 1

    const manualAuto = () => {
        if (logStatePin === newLogStatePin) {
            newLogStatePin = 0
        }

        props.setPin(namberPin, newLogStatePin)
    }

    return (
        <div id="1">
            <div>
                Varifan 2.2<b />
            </div>
            <div>
                <span>
                    <Ekran
                        pin={props.developmentSvimPage.pin}
                        ekran={props.developmentSvimPage.ekran}
                    />
                </span>
                <span>
                    <button> + </button>
                    <button> - </button>
                </span>
            </div>
            <span>
                <button>
                    ACTUAL POS
                </button>
            </span>
            <span>
                <button
                    onClick={(e) => { manualAuto() }}
                >
                    MAN/AUTO</button></span>
            <span><button>SETUP</button></span>

        </div>
    )
}
export default Panel