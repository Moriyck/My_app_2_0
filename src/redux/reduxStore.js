import { combineReducers, createStore } from "redux"
import profilReduser from "./profilReduser"
import dialogsReduser from "./dialogsReduser"
import saidebarReduser from "./saidsbarReduser"


let reduser = combineReducers({
    profilePage: profilReduser,
    dialogsPage: dialogsReduser,
    saidebar: saidebarReduser
})

let store = createStore(reduser)

export default store