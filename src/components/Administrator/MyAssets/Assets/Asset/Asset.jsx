import React from 'react'
import classes from './Asset.module.css'
import userPhoto from '../../../../../assets/img/logoSubstitute.png'
import AssetMenu from './AssetMenu/AssetMenu'

const Asset = (props) => {
  
  return (
    <div className={classes.threeColumns}>
      <div>
        <b>Asset {props.profileAsset.name}</b>
      </div>
      <div className={classes.threeColumns}>
        <div>
          <img alt={props.name} className={classes.logo} src={props.logo || userPhoto} />
        </div>
        <div>Description</div>
        <div>Data {props.profileAsset.owner}</div>
      </div>
      <div className={classes.twoColumns}>
        <div>
          <AssetMenu />
        </div>
        <div>Structure</div>
      </div>
    </div>
  )
}

export default Asset;