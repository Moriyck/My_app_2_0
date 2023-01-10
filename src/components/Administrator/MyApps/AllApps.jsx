import React from 'react'
import classes from './Apps.module.css'

const AllApps = (props) => {
  debugger
  return (
    <div className={classes.avatar}>
      {props.id}
      {props.name}
      {props.to}
      {props.routPath}
    </div>
  )
}

export default AllApps