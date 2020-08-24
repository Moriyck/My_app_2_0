import { stopSubmit } from "redux-form"
import { nameMyPasswordAPI } from "../../api/cocghdb/apiNameMy"
import { type } from "os"

const SET_AUTH_USER = 'SET_AUTH_USER'
const TOGAL_IS_FECHING = 'TOGAL_IS_FECHING'
const SET_INFO_NAME_MY = 'SET_INFO_NAME_MY'

export type InitialStateType = {
    initialState: any
}
export type DataType = {
    data: any
}
let initialState = {
    name: null,
    isAuth: false,
    isFetching: true,
    infoNameMy: []
}

const authReduser = (state = initialState, action: any) => {

    switch (action.type) {

        case SET_AUTH_USER:
            {
                return {
                    ...state,
                    name: action.name,
                    isAuth: true
                }
            }

        case SET_INFO_NAME_MY:
            {
                return {
                    ...state,
                    infoNameMy: action.infoNameMy
                }
            }

        case TOGAL_IS_FECHING:
            {
                return {
                    ...state,
                    isFetching: action.isFetching
                }
            }

        default:
            return state
    }
}

export const setAuthUser = (name: any) => ({ type: SET_AUTH_USER, name })
export const setInfoNameMy = (infoNameMy: any) => ({ type: SET_INFO_NAME_MY, infoNameMy })
export const totalIsFetchin = (isFetching: any) => ({ type: TOGAL_IS_FECHING, isFetching })

export const putRegistrUserNew = (nameMy: any, password: any) =>
    async (dispatch: any) => {
        const response = await nameMyPasswordAPI.putRegistrUserNew(nameMy, password)
        if (response.status === 200) {
            dispatch(setAuthUser(response.data.name))
        }
        else {
            dispatch(stopSubmit('registration', { _error: response.data.error + " " + response.data.reason }))
        }
    }

export const postNameMyPassword = (nameMy: any, password: any) =>
    async (dispatch: any) => {
        const response = await nameMyPasswordAPI.postNameMyPassword(nameMy, password)
        if (response.status === 200) {
            dispatch(setAuthUser(response.data.name))
        }
        else {
            dispatch(stopSubmit('login', { _error: response.data.error + " " + response.data.reason }))
        }
    }

export const deleteNameMyPassword = () =>
    async (dispatch: any) => {
        nameMyPasswordAPI.deleteNameMyPassword()
        dispatch(setAuthUser(null))
    }

export const getNameMy = () =>
    async (dispatch: any) => {
        dispatch(totalIsFetchin(true))
        nameMyPasswordAPI.getNameMy().then((data: { userCtx: { name: any } }) => {
            dispatch(totalIsFetchin(false))
            dispatch(setAuthUser(data.userCtx.name))
            nameMyPasswordAPI.getInfoNameMy(data.userCtx.name).then((data: any) => {
                dispatch(setInfoNameMy(data))
            })
        })
    }

export default authReduser