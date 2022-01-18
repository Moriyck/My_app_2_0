import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../../../hoc/withAuthRedirectComponent'
import TestSystem from '../TestSystem/TestSystem'
import Ekran from './Ekran/Ekran'



class SvimContainer extends React.Component {

  componentDidMount() {

  }

  render() {

    return (
      <div>
        <div>
          <Ekran />
          <TestSystem/>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({

  profilePage: state.profilePage
})

export default compose(
  connect(mapStateToProps, {}),
  withRouter,
  withAuthRedirect
)(SvimContainer)