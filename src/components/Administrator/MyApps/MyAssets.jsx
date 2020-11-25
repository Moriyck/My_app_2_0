import React from 'react'
import classes from './MyAssets.module.css'
import Assets from './Assets/Assets'

const MyAssets = (props) => {

  if (props.myAssets === null) {
    return (
      <div className={classes.myAssets}>
        <div>
          <b>My assets</b>
        </div>
        <div>
          You don't have any assets
        </div>
        <div>
          <a href="#">Please create a new asset</a>
        </div>

        <div className={classes.myAssets}>
          <div>
            <b>My apps</b>
          </div>
          <div>
            You don't have any apps
          </div>
          <div>
            Please install the apps
          </div>
          <div>
            <b>All apps</b>
          </div>
        </div>

      </div>
    )
  }
  return (
    <div>
      <Assets
        assets={props.assets}
      />
    </div>
  )
}

export default MyAssets;