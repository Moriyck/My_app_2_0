import React from 'react'
import classes from './Dialogsitem.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {

  let path = `/Dialogs/${props.id}`;



  return (
    <div className={classes.dialogsItem}>
      <div className={`${classes.dialog} ${classes.active}`}>
        <img src={props.avatar}></img>
        {<NavLink to={path}>{props.name}</NavLink>}
      </div>
    </div>
  )
}


export default DialogItem;