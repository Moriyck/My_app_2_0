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
          <Ekran
            {...this.props}
          />
          <TestSystem
            {...this.props}
          />
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({

  profilePage: state.profilePage,
  ekran: {
    text: 11,
    text1: 45454,
    text2: 'aaaassdasdsd feff'
  },
  pin: [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  developmentSvimPage: { tests: [1, 2, 2, 1, 1, 1, 1, 1, 1] }
})

export default compose(
  connect(mapStateToProps, {}),
  withRouter,
  withAuthRedirect
)(SvimContainer)