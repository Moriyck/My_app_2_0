import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MyAssets.module.css'
import Assets from './Assets/Assets'

const MyAssets = (props) => {

  if (props.numberOfAssets === 0) {
    return (
      <div className={classes.myAssets}>
        <div>
          <b>My assets</b>
        </div>
        <div>
          You have no assets
        </div>
        <div>
          <span>
            <NavLink
              to="/myAssets/CreateNewAsset"
              className={classes.button}
              activeClassName={classes.activelink}
            >
              Create a new asset
    </NavLink>
          </span>
        </div>
      </div>
    )
  }
  
  return (
    <div>
      <Assets
        publicProfile={props.publicProfile}
        assets={props.assets}
        profileAsset={props.profileAsset}
        match={props.match}
      />
    </div>
  )
}

export default MyAssets;