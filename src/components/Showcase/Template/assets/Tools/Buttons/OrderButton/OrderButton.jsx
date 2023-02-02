import React from 'react'
import classes from './OrderButton.module.css'

const OrderButton = (props) => {
debugger
    return (
        <div className={classes.button}>
      {props.value}
        </div >
    )
}

export default OrderButton