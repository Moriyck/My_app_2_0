import React from 'react'
import Greeteng from './1Greeting/Greeteng'
import LeadParagraph from './2LeadParagraph/LeadParagraph'
import Offer from './3Offer/Offer'
import Objections from './4Objections/Objections'
import Bargain from './5Bargain/Bargain'
import classes from './Contents.module.css'

const Contents = (props) => {

    return (
        <div className={classes.contents}>
            <Greeteng />
            <LeadParagraph />
            <Offer />
            <Objections />
            <Bargain />
        </div >
    )
}

export default Contents