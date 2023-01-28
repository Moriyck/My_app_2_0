import React from 'react'
import classes from './Greeteng.module.css'
import Header from './Header/Header'
import Quote from './Quote/Quote'

const Greeteng = (props) => {

    return (
        <div className={classes.greeteng}>
            <Header />{/*5555*/} 
            <Quote />
        </div >
    )
}

export default Greeteng