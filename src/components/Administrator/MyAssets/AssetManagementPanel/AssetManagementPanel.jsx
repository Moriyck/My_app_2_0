import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './AssetManagementPanel.module.css'

const AssetManagementPanel = (props) => {
  
  let pathRoute = props.allMenu.AssetManagementPanel.map(am =>
    <span key={am.key}>
      <NavLink
        to={am.to}
        className={classes.button}
        activeClassName={classes.activelink}
        onClick={(e) => {
          if (am.onClick === null) {
            props.toResetTheTypeOfAsset(am.onClick)
          }
          else {
            props.saveChanges(props.assetPage.profileAsset)
          }
        }}
      >
        {am.name}
      </NavLink>
    </span>)

  return (
    <div className={classes.twoColumns}>
      <div>
        <b>My assets </b>{props.noMyAssets}<p />
      </div>
      <div>
        {pathRoute}
      </div>
    </div>
  )
}

export default AssetManagementPanel