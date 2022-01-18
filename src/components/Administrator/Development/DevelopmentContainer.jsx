import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../../hoc/withAuthRedirectComponent'
import SvimContainer from './Svim/SvimContainer'

class DevelopmentContainer extends React.Component {

  componentDidMount() {
   
  }
  
  render() {

    return (
      <div>
      <SvimContainer/>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({

  profilePage: state.profilePage
})

export default compose(
  connect(mapStateToProps, {    }),
  withRouter,
  withAuthRedirect
)(DevelopmentContainer)