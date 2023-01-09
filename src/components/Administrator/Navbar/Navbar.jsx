import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
  let navLinks = props.allMenu.saidebar.map(n => <p key={n.id}><NavLink key={n.id} to={n.to} activeClassName={classes.activelink}>{n.name}</NavLink></p>);
  let servicesLink = props.allMenu.servicesLink.map(f => <p key={f.id}><NavLink key={f.id} to={f.to} activeClassName={classes.activelink}>{f.name}</NavLink></p>);
  let settingsLinks = props.allMenu.settingsLinks.map(s => <p key={s.id}><NavLink key={s.id} to={s.to} activeClassName={classes.activelink}>{s.name}</NavLink></p>);

  return (
    <div>
      <div className={classes.item}>
        {navLinks}
      </div>
      My apps
      <div className={classes.item}>
        {servicesLink}
      </div>
      Settings
      <div className={classes.item}>
        {settingsLinks}
      </div>
    </div>
  )
}

export default Navbar;