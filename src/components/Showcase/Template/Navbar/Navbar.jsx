import React from 'react'
import classes from './Navbar.module.css'
import logo from '../assets/Img/logo.png'
import TopMenuButton from '../assets/Tools/Buttons/TopMenuButton/TopMenuButton'

const Navbar = (props) => {

    let textColor = classes.textColor


    return (
        <div className={classes.navBar}>
            <div>
                <a className={classes.twoColumns}>
                    <img className={classes.logo} src={logo} />
                    <div className={classes.textColor}>
                     <h3>Цифровой подход</h3>
                    </div>
                </a>
            </div>
            <div className={classes.btn}>
                <TopMenuButton />
            </div>
        </div >
    )
}

export default Navbar