import React from 'react'
import classes from './Element.module.css'

const Element = (props) => {
    debugger
    return (
        <div className={classes.threeColumns}>
            <span className={classes.table}>
                {props.listItems}
            </span>
            <span className={classes.table}>
                {props.name}<p />
            </span>
            <span key={4444} className={classes.table}>
                <span
                    className={classes.button}
                    activeClassName={classes.activelink}
                    onClick={(e) => { props.getEnterpriseElementSecondLevel(props.id) }}
                >
                    detailed
                </span>
            </span >
        </div >
    )
}

export default Element