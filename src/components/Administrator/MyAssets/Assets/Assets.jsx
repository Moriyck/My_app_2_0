import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Assets.module.css'
import AllAssets from './AllAssets/AllAssets'
import Asset from './Asset/Asset'

const Assets = (props) => {
  let assetsElements = props.assets.map(as => <AllAssets
    publicProfile={props.publicProfile}
    assetsId={as.id}
    name={as.doc.name}
    match={props.match}
  />)

  if (props.match.url === "/myAssets") {
    return (
      <div>
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
        {assetsElements}
      </div>
    )
  }

  return (
    <div className={classes.assets}>
      <span>
        <NavLink
          to="/myAssets"
          className={classes.button}
          //activeClassName={classes.activelink}
        >
          All Assets
    </NavLink>
      </span>
      <Asset
        assets={props.assets}
        profileAsset={props.profileAsset}
        match={props.match}
      />
    </div>
  )
}

export default Assets;