import React from 'react'
import classes from './Friends.module.css'

const FriendsItem = (props) => {

  let userId = props.id
  let wordfollow = props.follow

  if (wordfollow === true) {
    wordfollow = 'Follow'
  }
  else {
    wordfollow = 'Unfollow'
  }

  let changeToFolloww = () => {
    if (props.follow === true) {
      props.changeToUnFollow(userId)
    }
    else {
      props.changeToFollow(userId)
    }
  }

  return (
    <div className={classes.friendsItem}>

      <div>
        <div>
          <img className={classes.avatar} src={props.avatar} />
        </div>
        <div>
          <button onClick={changeToFolloww}>{wordfollow}</button>
        </div>
      </div>
      <div >
        
      </div>
      <div className={classes.message}>

        <div>
          <div>
            Nicname: {props.name}{props.id}
          </div>
          <div>
            Status: {props.status}
          </div>
        </div>

        <div>
          <div>
            Country: {props.country}
          </div>

          <div>
            City: {props.city}
          </div>
        </div>
      </div>
    </div>
  )
}
export default FriendsItem