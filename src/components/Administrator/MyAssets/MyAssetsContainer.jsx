import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../../hoc/withAuthRedirectComponent'
import {
  getMyAssets,
  getProfileAsset
} from "../../../redux/Reduser/myAssetsReduser"
import MyAssets from './MyAssets'
import CreateNewAsset from './CreateNewAsset/CreateNewAsset'

class myAssetsContainer extends React.Component {

  componentDidMount() {
    this.props.getMyAssets(this.props.nameMy)
  }

  publicProfile = (assetsId) => {
    this.props.getProfileAsset(assetsId)
  }

  render() {
    if (this.props.match.url === "/myAssets/CreateNewAsset") {
      return (
        <div>
          <Route
            path='/myAssets/CreateNewAsset'
            render={() =>
              < CreateNewAsset
                allSettings={this.props.allSettings}
                onChange={this.props.onChange}
              />} />
        </div>
      )
    }
    return (
      <div>
        <MyAssets
          publicProfile={this.publicProfile}
          numberOfAssets={this.props.myAssetsPage.numberOfAssets}
          assets={this.props.myAssetsPage.assets}
          profileAsset={this.props.myAssetsPage.profileAsset}
          match={this.props.match}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  myAssetsPage: state.myAssetsPage
})

export default compose(
  connect(mapStateToProps, {
    getMyAssets,
    getProfileAsset
  }),
  withRouter,
  withAuthRedirect
)(myAssetsContainer)