import { myAssetsAPI } from "../../../../api/cocghdb/apiAssets"
import enterpriseAssetReduser from "./Enterprise/enterpriseAssetReduser"

const PROFILE_ASSETS = 'PROFILE_ASSETS'
const PASS_LATTER_FILD = 'PASS_LATTER_FILD'

let initialState = {
    profileAsset: {},
    nameAsset: [],

    BankAccounts: [],
    AccountingPolicy: [],
    Enterprise: enterpriseAssetReduser.elementsSecondLevel,
    Personnel: [],
    Salary: [],
    Warehouse: [],
    Shop: [],
    Settings: [],

    optionValueSelect: [
        { option: "Choose the legal status" },
        { option: "Individual entrepreneur" },
        { option: "Legal entity" },
        { option: "Self employed" },
    ],
}

const assetReduser = (state = initialState, action) => {
    switch (action.type) {

        case PROFILE_ASSETS:
            return {
                ...state,
                profileAsset: action.profileAsset
            }
        case PASS_LATTER_FILD:
            debugger
            return {
                ...state,
                profileAsset: { ...state.profileAsset, INN: action.latter }
            }

        default:
            return state
    }
}

export const profileAsset = (profileAsset) => ({ type: PROFILE_ASSETS, profileAsset })
export const passLatterFild = (latter) => ({ type: PASS_LATTER_FILD, latter })

export const getProfileAsset = (assetsId) =>
    async (dispatch) => {
        myAssetsAPI.getProfileAsset(assetsId)
            .then(response => {
                dispatch(profileAsset(response.data))
            })
    }

export default assetReduser