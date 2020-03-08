import { connect } from "react-redux";
import Profil from "./Profil";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../redux/profilReduser";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}
let mapDisprtchToProps = (dispatch) => {
  return {

    onPostCnage: (body) => {
      let action = updateNewPostTextActionCreator(body)
      dispatch(action)
    },
    addPost: () => {
      let action = addPostActionCreator()
      dispatch(action)
    }
  }
}
debugger
const ProfilContainer = connect(mapStateToProps, mapDisprtchToProps)(Profil)

export default ProfilContainer