import { applyMiddleware, combineReducers, createStore } from "redux"
import { reducer as formReducer } from "redux-form"
import thunkMidleware from "redux-thunk"
import authReduser from "./Reduser/Auth/authReduser"
import dialogsReduser from "./Reduser/dialogsReduser"
import menuReduser from "./Reduser/menuReduser"
import profilReduser from "./Reduser/profilReduser"
import settingsReduser from "./Reduser/settingsReduser"
import usersReduser from "./Reduser/usersReduser"
import myAssetsReduser from "./Reduser/MyAssets/myAssetsReduser"
import assetReduser from "./Reduser/MyAssets/Asset/assetReduser"
import enterpriseAssetReduser from "./Reduser/MyAssets/Asset/Enterprise/enterpriseAssetReduser"
import creatingNewAssetReduser from "./Reduser/MyAssets/creatingNewAssetReduser"
import xmlParserReduser from "./Reduser/xmlPsrserReduser"
import modalReduser from "./Reduser/Modal/modalReduser"
import developmentReduser from "./Reduser/Development/developmentReduser"
import preloaderReduser from "./Reduser/Preloader/preloaderReduser"
import svimReduser from "./Reduser/Development/Svim/svimReduser"
import applicationReduser from "./Reduser/Application/applicationReduser"

let reduser = combineReducers({
    preloaderState:preloaderReduser,
    applicationPage:applicationReduser,

    profilePage: profilReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReduser,
    allMenu: menuReduser,
    authPage: authReduser,
    allSettings: settingsReduser,
    myAssetsPage: myAssetsReduser,
    assetPage: assetReduser,
    enterpriseAssetPage: enterpriseAssetReduser,
    pageCreatingNewAsset: creatingNewAssetReduser,
    xmlParserData: xmlParserReduser,
    modalReduser: modalReduser,

    developmentPage:developmentReduser,
    developmentSvimPage:svimReduser,
    
    form: formReducer
})

let store = createStore(reduser, applyMiddleware(thunkMidleware))

window.store = store
export default store