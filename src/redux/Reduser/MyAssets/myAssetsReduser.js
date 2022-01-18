import { myAssetsAPI } from "../../../api/cocghdb/apiAssets"

const SHOW_ERROR = 'SHOW_ERROR'
const NO_MY_ASSETS = 'NO_MY_ASSETS'
const SELECT_MY_ASSETS = 'SELECT_MY_ASSETS'

const TO_RESET_THE_TYPE_OF_ASSET = 'TO_RESET_THE_TYPE_OF_ASSET'
const CHANGE_THE_TYPE_OF_ASSETS = 'CHANGE_THE_TYPE_OF_ASSETS'

let initialState = {
    numberOfAssets: 0,
    noMyAssets: null,
    assets: [],
    statusText: null,
    typeOfAsset: null,
}

const myAssetsReduser = (state = initialState, action) => {
    switch (action.type) {

        case NO_MY_ASSETS:
            return {
                ...state,
                numberOfAssets: 0,
                noMyAssets: action.noMyAssets
            }

        case SELECT_MY_ASSETS:
            return {
                ...state,
                numberOfAssets: 1,
                assets: action.assets,
            }

        case SHOW_ERROR:
            return {
                ...state,
                statusText: action.statusText
            }

        case TO_RESET_THE_TYPE_OF_ASSET:
            return {
                ...state,
                typeOfAsset: action.typeOfAsset
            }

        case CHANGE_THE_TYPE_OF_ASSETS:
            return {
                ...state,
                typeOfAsset: action.typeOfAsset
            }

        default:
            return state
    }
}

export const noMyAssets = (noMyAssets) => ({ type: NO_MY_ASSETS, noMyAssets })
export const selectMyAssets = (assets) => ({ type: SELECT_MY_ASSETS, assets })
export const showError = (statusText) => ({ type: SHOW_ERROR, statusText })

export const getMyAssets = (nameMy) =>
    async (dispatch) => {
        myAssetsAPI.getMyAssets(nameMy)
            .then(response => {
                if (response.status === 200) {
                    if (response.data.rows.length === 0) {
                        dispatch(noMyAssets("You have no assets"))
                    }
                    else {
                        dispatch(selectMyAssets(response.data.rows))
                    }
                }
                else {
                    dispatch(showError(response.statusText))
                }
            })
    }

export const toResetTheTypeOfAsset = (typeOfAsset) => ({ type: TO_RESET_THE_TYPE_OF_ASSET, typeOfAsset })
export const changeTheTypeOfAsset = (typeOfAsset) => ({ type: CHANGE_THE_TYPE_OF_ASSETS, typeOfAsset })

export default myAssetsReduser