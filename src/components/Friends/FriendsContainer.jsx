import React from 'react'
import { connect } from "react-redux"
import { followAC, unFollowAC, setUsersAC, setCurrontPageAC, setTotalRowsAC } from "../../redux/Reduser/friendsReduser"
import Friends from "./Friends"
import *as axios from 'axios'

class FriendsContainer extends React.Component {

  componentDidMount() {
    let skipSaze = (this.props.pageSaze * this.props.currontPage) - this.props.pageSaze
    axios.get(`http://localhost:5984/myapp/_design/users/_view/users?include_docs=true&limit=${this.props.pageSaze}&skip=${skipSaze}`)
      .then(response => {
        //debugger
        this.props.setUsers(response.data.rows)
        this.props.setTotalRows(response.data.total_rows)
      })
  }
  onPageChanged = (pageNumber) => {
    let skipSaze = (this.props.pageSaze * pageNumber) - this.props.pageSaze
    this.props.setCurrontPage(pageNumber)
    axios.get(`http://localhost:5984/myapp/_design/users/_view/users?include_docs=true&limit=${this.props.pageSaze}&skip=${skipSaze}`)
      .then(response => {

        this.props.setUsers(response.data.rows)
        this.props.setTotalRows(response.data.total_rows)
      })
  }
  render() {

    return (
      <div>
        <Friends
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          totalPageCount={this.props.totalPageCount}
          pageSaze={this.props.pageSaze}
          currontPage={this.props.currontPage}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => {

  return {
    users: state.friendsPage.users,
    pageSaze: state.friendsPage.pageSaze,
    totalPageCount: state.friendsPage.totalPageCount,
    currontPage: state.friendsPage.currontPage,
    skipSaze: state.friendsPage.skipSaze
  }
}

let mapDisprtchToProps = (dispatch) => {
  return {

    changeToFollow: (userId) => {
      let action = followAC(userId)
      dispatch(action)
    },

    changeToUnFollow: (userId) => {
      let action = unFollowAC(userId)
      dispatch(action)
    },

    setUsers: (users) => {
      let action = setUsersAC(users)
      dispatch(action)
    },

    setCurrontPage: (pageNumber) => {
      let action = setCurrontPageAC(pageNumber)
      dispatch(action)
    },

    setTotalRows: (totalRows) => {
      let action = setTotalRowsAC(totalRows)
      dispatch(action)

    }
  }
}

export default connect(mapStateToProps, mapDisprtchToProps)(FriendsContainer)