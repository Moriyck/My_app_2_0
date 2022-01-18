import * as apiMenu from "../../api/cocghdb/apiMenu"

const SET_ALL_MENU = 'SET_ALL_MENU'

let initialState = {
    saidebar: [],
    profileSetting: [],
    AssetManagementPanel: [],
    AssestEnterpriseModalMenu: [],
    assetSettingsMenu: [],
    servicesLink: [],
    settingsLinks: [],
    AssestEnterpriseMenu: [],
    assetMenu: [],
}

const menuReduser = (state = initialState, action) => {
    switch (action.type) {

        case SET_ALL_MENU:
            return {
                ...state,
                AssestEnterpriseMenu: action.elementsLinks[0].doc.elementsLinks,
                AssestEnterpriseModalMenu: action.elementsLinks[1].doc.elementsLinks,
                AssetManagementPanel: action.elementsLinks[2].doc.elementsLinks,

                assetSettingsMenu: action.elementsLinks[4].doc.elementsLinks,
                profileSetting: action.elementsLinks[5].doc.elementsLinks,
                saidebar: action.elementsLinks[6].doc.elementsLinks,
                servicesLink: action.elementsLinks[7].doc.elementsLinks,
                settingsLinks: action.elementsLinks[8].doc.elementsLinks,
            }
        default:
            return state
    }
}

export const setAllMenu = (elementsLinks) => ({ type: SET_ALL_MENU, elementsLinks })

export const getAllMenu = (menuId) =>
    async (dispatch) => {
        apiMenu.menuAPI.getAllMenu(menuId)
            .then(response => {
                dispatch(setAllMenu(response))
            })
    }

export default menuReduser