import * as apiMenu from "../../api/cocghdb/apiMenu"

const SET_MENU_SAIDEBAR = 'SET_MENU_SAIDEBAR'
const SET_MENU_SETTING = 'SET_MENU_SETTING'

let initialState = {
    elementsLinks: [],
    settingMenu: [],
    servicesLink: [
        { id: 1, name: 'EAM', to: '/EnterpriseAssetManagement', activeClassName: 'classes.activelink' },
        { id: 2, name: 'CRM', to: '/CRM', activeClassName: 'classes.activelink' },
        
    ],
    settingsLinks: [
        { id: 1, name: 'Profile settings', to: '/Settings', activeClassName: 'classes.activelink' },
        { id: 2, name: 'Showcase settings', to: '/ShowcaseSettings', activeClassName: 'classes.activelink' },
        { id: 3, name: 'Contact us', to: '/ContactUs', activeClassName: 'classes.activelink' },
    ],
}

const menuReduser = (state = initialState, action: { type: any; elementsLinks: any; settingMenu: any }) => {
    switch (action.type) {

        case SET_MENU_SAIDEBAR:
            return {
                ...state,
                elementsLinks: action.elementsLinks
            }

        case SET_MENU_SETTING:
            return {
                ...state,
                settingMenu: action.settingMenu
            }

        default:
            return state
    }
}

export const setMenuSaidebar = (elementsLinks: any) => ({ type: SET_MENU_SAIDEBAR, elementsLinks })
export const setMenuSetting = (settingMenu: any) => ({ type: SET_MENU_SETTING, settingMenu })

export const getMenu = (menuId: any) =>
    async (dispatch: (arg0: { type: string; elementsLinks: any }) => void) => {
        apiMenu.menuAPI.getMenu(menuId).then((data: { elementsLinks: any }) => {
            dispatch(setMenuSaidebar(data.elementsLinks))
        })
    }

export const getMenuSettting = (menuId: any) =>
    async (dispatch: (arg0: { type: string; settingMenu: any }) => void) => {
        apiMenu.menuAPI.getMenuSettting(menuId).then((data: { elementsLinks: any }) => {
            dispatch(setMenuSetting(data.elementsLinks))
        })
    }

export default menuReduser