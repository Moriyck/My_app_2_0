import React from 'react'
import classes from './Greeteng.module.css'
import Header from './Header/Header'
import LeadParagraph from './LeadParagraph/LeadParagraph'
import Quote from './Quote/Quote'

const Greeteng = (props) => {

    return (
        <div className={classes.greeteng}>
            <Header />
            <Quote />
            <LeadParagraph/>
        </div >
    )
}

export default Greeteng