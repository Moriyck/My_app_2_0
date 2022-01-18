import { myAssetsAPI } from "../../../api/cocghdb/apiAssets"

const GET_NAME_ASSETS = 'GET_NAME_ASSETS'
const SHOW_ERROR = 'SHOW_ERROR'
const ADD_ASSET = 'ADD_ASSET'
const SAVE_CHANGES_TO_NEE_ASSET = 'SAVE_CHANGES_TO_NEE_ASSET'

let initialState = {
    nameAsset: [],
    textError: "null",
    idAsset: null,
    dataAsset: {}
}

const myAssetsReduser = (state = initialState, action) => {
    switch (action.type) {

        case SHOW_ERROR:
            return {
                ...state,
                textError: action.textError
            }

        case GET_NAME_ASSETS:
            return {
                ...state,
                nameAsset: action.nameAsset
            }

        case ADD_ASSET:
            return {
                ...state,
                idAsset: action.idAsset
            }
        case SAVE_CHANGES_TO_NEE_ASSET:
            return {
                ...state,
                dataAsset: action.newDate
            }

        default:
            return state
    }

}

export const selectNameAssets = (nameAsset) => ({ type: GET_NAME_ASSETS, nameAsset })
export const showError = (textError) => ({ type: SHOW_ERROR, textError })
export const addAsset = (textError) => ({ type: ADD_ASSET, textError })
export const saveChangesToANewAsset = (newDate) => ({ type: SAVE_CHANGES_TO_NEE_ASSET, newDate })

export const getNameAssets = (name) =>
    async (dispatch) => {
        myAssetsAPI.findNamesAssets(name)
            .then(response => {
                if (response.status === 200) {
                    dispatch(selectNameAssets(response.data.rows))
                }
                else {
                    dispatch(showError(response.statusText))
                }
            })
    }

export const creatingNewAsset = (name, nameMy, taxSystem, idAsset) =>
    async (dispatch) => {
        myAssetsAPI.creatingNewAsset(name, nameMy, taxSystem)
        dispatch(addAsset(idAsset))
    }

export const saveChanges = (doc, newDate) =>
    async (dispatch) => {
        myAssetsAPI.saveANewAsset(doc, myAssetsReduser.dataAsset)
        dispatch(saveChangesToANewAsset(newDate))
    }

export default myAssetsReduser