import React from 'react'
import logoPhoto from '../../../assets/img/logo.png'
import classes from './Header.module.css'

const Header = (props) => {
  const logAut = () => {
    props.logAut()
  }
  let button = <button onClick={logAut}>log out</button>
  let avatar = props.authPage.avatar
  
  return (
    <div className={classes.tooColomns}>
      <div>
        <div className={classes.tooColomns}>
          <img alt="" src={logoPhoto}></img>
          <div>
            <h2>
              Large project
            </h2>
            <span>
              Accounting. Planning. Development.
            </span>
          </div>
        </div>
      </div>
      <div className={classes.tooColomns}>
        <div>

        </div>
        <div className={classes.logName}>
          <span> Hello, {props.nameMy} </span>
          <span className={classes.avatar}> <img alt="" src={avatar} /></span>
          <span> {props.nameMy === null ? "log in or register" : button} </span>
        </div>
      </div>
    </div>
  )
}

export default Header