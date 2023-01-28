import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import ShowcaseContainer from './Showcase/ShowcaseContainer'
import AuthContainer from './Authentication/AuthContainer'

class TheFirstDirectoryContainer extends React.Component {

  componentDidMount() {
  }

  productIdRequest = (company) => {

  }

  render() {

    return (
      <div >
        <Switch>
          <Route path='/Showcase/:companyName?/:companyId?/:templateId?'
            render={() => < ShowcaseContainer />} />
          <Route path='/'
            render={() => < AuthContainer />} />
        </Switch>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    isFetching: state.profilePage.isFetching

  }
}

export default compose(
  connect(mapStateToProps, {
  }),
  withRouter,

)(TheFirstDirectoryContainer)