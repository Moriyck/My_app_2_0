import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Apps.module.css'
import appNooPhoto from './TestStand/img/appNooPhoto.png'

const AllApps = (props) => {
 
  return (
    <div>
      <div>
        {props.name}
      </div>
      <div>
        <NavLink to={'/myApps' + props.to}>
          <img alt={props.name} className={classes.allApps} src={props.img || appNooPhoto} />
        </NavLink>
      </div>
    </div>
  )
}

export default AllApps