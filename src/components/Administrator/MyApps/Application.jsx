import React from 'react'
import { Route } from 'react-router-dom'
import TestStandConainer from './TestStand/TestStandConainer'

const Application = (props) => {

  return (
    <div>
      <Route
        path={'/myApps/testStand'}
        render={() =>
          < TestStandConainer />
        } />
    </div>
  )
}

export default Application