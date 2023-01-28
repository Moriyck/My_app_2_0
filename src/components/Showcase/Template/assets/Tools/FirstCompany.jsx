import React from 'react'
import Contents from './Contents/Contents'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'

const FirstCompany = (props) => {

    return (
        <div id="wrapper">
            <Navbar />
            <Header />
            <Contents />
            <Footer />
        </div >
    )
}

export default FirstCompany