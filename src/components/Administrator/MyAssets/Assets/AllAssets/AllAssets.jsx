import React from 'react'
import classes from './AllAssets.module.css'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../../../../assets/img/logoSubstitute.png'

const AllAssets = (props) => {
  return (
    <div className={classes.asset}>
      <div>
        <NavLink to={'/myAssets/Assets/' + props.assetsId}>
          <img
            onClick={(e) => { props.publicProfile(props.assetsId) }}
            alt={props.name}
            className={classes.logo}
            src={props.logo || userPhoto} />
        </NavLink>
      </div>
      <div>{props.name}</div>
      <div>data 000</div>
    </div>
  )
}

export default AllAssets;