import React from 'react'
import classes from './TopMenuButton.module.css'

const TopMenuButton = (props) => {

    return (
        <div className={classes.twoColumns}>
      <button className={classes.button}>{props.name}</button>
        </div >
    )
}

export default TopMenuButton