import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './LegalEntity.module.css'

const LegalEntity = (props) => {

  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <h2>Legal entity</h2>
      </div>
      <div className={classes.description}>
        <p>
          Activities are conducted on the basis of the Charter of the legal entity.
          </p>
      </div>
      <div className={classes.buttom}>
        <NavLink
          to="/myAssets/CreateNewAsset/SettingsLegalEntity"
          className={classes.button}
          activeClassName={classes.activelink}
          onClick={(e) => { props.selectAnAssetType("LegalEntity") }}
        >
          Select
    </NavLink>
      </div>
    </div>
  )
}

export default LegalEntity