import { menuAPI } from "../../api/cocghdb/apiMenu"

const SET_MENU_SAIDEBAR = 'SET_MENU_SAIDEBAR'
const SET_MENU_SETTING = 'SET_MENU_SETTING'

let initialState = {
    elementsLinks: [],
    settingMenu: [],
    servicesLink: [
        { id: 1, name: 'RMS', to: '/ResourceManagementSystem', activeClassName: 'classes.activelink' },
        { id: 2, name: 'CRM', to: '/CRM', activeClassName: 'classes.activelink' },
        
    ],
    settingsLinks: [
        { id: 1, name: 'Settings', to: '/Settings', activeClassName: 'classes.activelink' }
    ],
}

const menuReduser = (state = initialState, action) => {
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

export const setMenuSaidebar = (elementsLinks) => ({ type: SET_MENU_SAIDEBAR, elementsLinks })
export const setMenuSetting = (settingMenu) => ({ type: SET_MENU_SETTING, settingMenu })

export const getMenu = (menuId) =>
    async (dispatch) => {
        menuAPI.getMenu(menuId).then(data => {
            dispatch(setMenuSaidebar(data.elementsLinks))
        })
    }

export const getMenuSettting = (menuId) =>
    async (dispatch) => {
        menuAPI.getMenuSettting(menuId).then(data => {
            dispatch(setMenuSetting(data.elementsLinks))
        })
    }

export default menuReduser