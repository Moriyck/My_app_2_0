import React from 'react'
import classes from './Price.module.css'

const Price = (props) => {

    return (
        <div className={classes.price}>
            <div>
                Price
            </div>
            <div className={classes.threeColumns}>
                <div>
                    1  Тариф
                </div>
                <div>
                    1  Тариф
                </div>
                <div>
                    1  Тариф
                </div>
            </div>
        </div >
    )
}

export default Price