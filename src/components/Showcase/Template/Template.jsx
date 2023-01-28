import React from 'react'
import classes from './Template.module.css'
import Contents from './Contents/Contents'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'

const Template = (props) => {
 
    return (
        <div className={classes.wrapper}>
            <Navbar />
            <Header />
            <Contents />
            <Footer />
        </div >
    )
}

export default Template