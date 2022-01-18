import React from 'react'

const StatePines = (props) => {
    let pinStatus = props.developmentSvimPage.pin.map((as, index) =>
        <div>
            Pin № {index + 1} logical [{as}]
        </div>
    )

    return (
        <div id="1111">
            <p />Pin status
            <p />{pinStatus}
        </div>
    )
}

export default StatePines