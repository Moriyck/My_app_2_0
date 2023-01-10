import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../../../hoc/withAuthRedirectComponent'
import {
  getAllMenu,
} from '../../../../redux/Reduser/menuReduser'
import TestStand from './TestStand'

class TestStandConainer extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <TestStand
          {...this.props}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  allMenu: state.allMenu,
})

export default compose(
  connect(mapStateToProps, {
    getAllMenu,
  }),
  withRouter,
  withAuthRedirect
)(TestStandConainer)