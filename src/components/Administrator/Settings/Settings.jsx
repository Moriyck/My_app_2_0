import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import AboutMe from './AboutMe/AboutMe'
import ConfigureServices from './ConfigureServices/ConfigureServices'
import ContactInformation from './ContactInformation/ContactInformation'
import MySpecialization from './MySpecialization/MySpecialization'
import PersonalInformation from './PersonalInformation/PersonalInformation'
import classes from './Settings.module.css'
import UserAccount from './UserAccount/UserAccount'

const Settings = (props) => {
  let pathRoute = props.allMenu.settingMenu.map(sm =>
    <span key={sm.id}>
      <NavLink
        key={sm.id}
        to={sm.to}
        className={classes.button}
        activeClassName={classes.activelink}
      >
        {sm.name}
      </NavLink>
    </span>)
  return (
    <div >
      <div>
        <b>
          Settings
        </b>
        <p />
      </div>
      <div>
        {pathRoute}
        <p />
      </div>
      <div>
        {props.profilePage.responseStatus} {props.profilePage.statusText}<p />
      </div>
      <div>
        <Route
          path='/Settings/ConfigureServices'
          render={() =>
            < ConfigureServices
              allSettings={props.allSettings}
              onChange={props.onChange}
            />}
        />
        <Route path='/Settings/UserAccount'
          render={() =>
            < UserAccount />} />
        <Route path='/Settings/PersonalInformation'
          render={() =>
            < PersonalInformation
              onSubmit={props.setProfile}
              profilePage={props.profilePage}
            />} />
        <Route path='/Settings/AboutMe' render={() =>
          < AboutMe
            onSubmit={props.updateProfileAboutMe}
            profilePage={props.profilePage}
          />} />
        <Route path='/Settings/MySpecialization'
          render={() =>
            < MySpecialization />} />
        <Route path='/Settings/ContactInformation'
          render={() =>
            < ContactInformation />} />
      </div>
    </div>
  )
}

export default Settings