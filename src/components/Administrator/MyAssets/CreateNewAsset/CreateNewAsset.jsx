import React from 'react'
import classes from './CreateNewAsset.module.css'
import IndividualEntrepreneur from './IndividualEntrepreneur/IndividualEntrepreneur'

const CreateNewAsset = (props) => {

  return (
    <div className={classes.threeColumns}>
      <div>
        <IndividualEntrepreneur/>
      </div>
      <div>
        Legal entity
      </div>
      <div>
        Self-employed
      </div>
    </div>
  )
}

export default CreateNewAsset