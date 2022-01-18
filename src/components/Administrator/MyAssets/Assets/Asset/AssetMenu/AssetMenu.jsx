import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './AssetMenu.module.css'

const AssetMenu = (props) => {
  let pathRoute = props.allMenu.assetSettingsMenu.map(sm =>
    <div key={sm.id}>
      <NavLink
        key={sm.id}
        to={sm.to}
        className={classes.link}
        activeClassName={classes.activelink}
      >
        {sm.name}
      </NavLink>
    </div>)
  return (
    <div>
      {pathRoute}
    </div>
  )
}

export default AssetMenu