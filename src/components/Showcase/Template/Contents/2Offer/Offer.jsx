import React from 'react'
import MainPart from './MainPart/MainPart'
import classes from './Offer.module.css'
import Price from './Price/Price'
import SpecificOffer from './SpecificOffer/SpecificOffer'

const Offer = (props) => {

    return (
        <div className={classes.offer}>
            <MainPart />
            <SpecificOffer />
            <Price />
        </div >
    )
}

export default Offer