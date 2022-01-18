import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './SelfEmployed.module.css'

const SelfEmployed = (props) => {

  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <h2>Self employed</h2>
      </div>
      <div className={classes.description}>
        <p>
          Activities are conducted on the basis of registration of an Self employed.
          </p>
      </div>
      <div className={classes.buttom}>
        <NavLink
          to="/myAssets/CreateNewAsset/111"
          className={classes.button}
          activeClassName={classes.activelink}
        >
          Select
    </NavLink>
      </div>
    </div>
  )
}

export default SelfEmployed