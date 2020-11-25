import { myAssetsAPI } from "../../api/cocghdb/apiAssets"

const SHOW_ERROR = 'SHOW_ERROR'
const SELECT_MY_ASSETS = 'SELECT_MY_ASSETS'
const PROFILE_ASSETS = 'PROFILE_ASSETS'

let initialState = {
    numberOfAssets: null,
    profileAsset: {},
    assets: []
}

const myAssetsReduser = (state = initialState, action) => {
    switch (action.type) {

        case SHOW_ERROR:
            return {
                ...state,
                statusText: action.statusText
            }

        case SELECT_MY_ASSETS:
            return {
                ...state,
                assets: action.assets,
                numberOfAssets: action.assets.length
            }

        case PROFILE_ASSETS:
            return {
                ...state,
                profileAsset: action.profileAsset
            }

        default:
            return state
    }
}

export const showError = (statusText) => ({ type: SHOW_ERROR, statusText })
export const selectMyAssets = (assets) => ({ type: SELECT_MY_ASSETS, assets })
export const profileAsset = (profileAsset) => ({ type: PROFILE_ASSETS, profileAsset })

export const getMyAssets = (nameMy) =>
    async (dispatch) => {
        myAssetsAPI.getMyAssets(nameMy)
            .then(response => {
                if (response.status === 200) {
                    dispatch(selectMyAssets(response.data.rows))
                }
                else {
                    dispatch(showError(response.statusText))
                }
            })
    }
export const getProfileAsset = (assetsId) =>
    async (dispatch) => {
        myAssetsAPI.getProfileAsset(assetsId)
            .then(response => {
                dispatch(profileAsset(response.data))
            })
    }
export default myAssetsReduser