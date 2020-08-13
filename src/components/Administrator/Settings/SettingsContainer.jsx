import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../../hoc/withAuthRedirectComponent'
import { getMenuSettting } from '../../../redux/Reduser/menuReduser'
import { fileTheDownload, getPosts, getProfile, postPost, updateNewPostText, setProfile, updateStatus, updateProfileAboutMe } from "../../../redux/Reduser/profilReduser"
import Settings from './Settings'

class SettingsContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.nameMy
    }
    this.props.getProfile(userId)
    this.props.getMenuSettting('settingMenu')
  }

  setProfile = (propername, surname, birthdate) => {
    this.props.setProfile(this.props.nameMy, propername, surname, birthdate)
  }

  updateProfileAboutMe = (description, motto, status) => {
    this.props.updateProfileAboutMe(this.props.nameMy, this.props.profilePage.profil, description, motto, status)
  }

  onChange = (servisId) => {
    this.props.onChange(servisId)
  }

  onSubmit = (newPost) => {
    this.props.postPost(this.props.nameMy, newPost)
    this.props.updateNewPostText(newPost)
  }

  fileTheDownload = (e) => {
    this.props.fileTheDownload(this.props.nameMy, this.props.profilePage.profil._rev, e.target.files[0])
  }

  render() {
    return (
      <div key="">
        <Settings key=""
          {...this.props}
          onChange={this.onChange}
          setProfile={this.setProfile}
          updateProfileAboutMe={this.updateProfileAboutMe}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profilePage: state.profilePage,
  allSettings: state.allSettings,
  allMenu: state.allMenu
})

export default compose(
  connect(mapStateToProps, { updateNewPostText, getProfile, getPosts, postPost, updateStatus, fileTheDownload, getMenuSettting, setProfile, updateProfileAboutMe }),
  withRouter,
  withAuthRedirect
)(SettingsContainer)