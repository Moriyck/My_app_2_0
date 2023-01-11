import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../../../hoc/withAuthRedirectComponent'
import {
  getAllMenu,
} from '../../../../redux/Reduser/menuReduser'
import TestStand from './TestStand'

import { startCounter } from '../../../../redux/Reduser/Application/applicationReduser'

class TestStandConainer extends React.Component {

  componentDidMount() {

  }

  startCounter = (counter) => {
    this.props.startCounter(counter)
  }

  render() {
    
    return (
      <div>
        <TestStand
          {...this.props}
          startCounter={this.startCounter}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  allMenu: state.allMenu,
  applicationState: state.applicationPage,
})

export default compose(
  connect(mapStateToProps,
    { getAllMenu, startCounter },

  ),
  withRouter,
  withAuthRedirect
)(TestStandConainer)