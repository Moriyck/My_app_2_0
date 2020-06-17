import { combineReducers, createStore } from "redux"
import profilReduser from "./Reduser/profilReduser"
import dialogsReduser from "./Reduser/dialogsReduser"
import saidebarReduser from "./Reduser/saidsbarReduser"
import friendsReduser from "./Reduser/friendsReduser"

let reduser = combineReducers({
    profilePage: profilReduser,
    dialogsPage: dialogsReduser,
    friendsPage: friendsReduser,
    saidebar: saidebarReduser
})

let store = createStore(reduser)

export default store