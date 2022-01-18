import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './IndividualEntrepreneur.module.css'

const IndividualEntrepreneur = (props) => {

  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <h2>Individual entrepreneur</h2>
      </div>
      <div className={classes.description}>
        <p>
          Activities are conducted on the basis of a certificate of registration of an individual entrepreneur.
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

export default IndividualEntrepreneur