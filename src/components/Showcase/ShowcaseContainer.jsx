import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import Template from './Template/Template'


class ShowcaseContainer extends React.Component {

  componentDidMount() {
    debugger
    let companyId = this.props.match.params.companyId
      let companyName = this.props.match.params.companyName
      let templateId = this.props.match.params.templateId
    
      }
  
  render() {
    debugger
    return (
      <div>
      <Template />
    </div >
    )
  }
}

let mapStateToProps = (state) => ({
  profilePage: state.profilePage,
  isFetching: state.profilePage.isFetching
})

export default compose(
  connect(mapStateToProps, {
 
  }),
  withRouter,
  
)(ShowcaseContainer)






