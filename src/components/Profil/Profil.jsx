import React from 'react'
import classes from './Profil.module.css'
import Profilinfo from './Profilinfo/Profilinfo'
import Maypost from './Maypost/Maypost'

const Profil = (props) => {
  
  return (
    <div className={classes.profil}>
      <div>
        <Profilinfo />
      </div>
      <div>
        <Maypost
          profilePage={props.profilePage}
          addPost={props.addPost}
          onPostCnage={props.onPostCnage}
        />
      </div>
    </div>
  )
}

export default Profil;