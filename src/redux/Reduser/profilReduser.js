import actions from "redux-form/lib/actions"
import { profileAPI } from "../../api/cocghdb/apiProfile"
import { settingsAPI } from "../../api/cocghdb/apiSettings"

const SET_PROFIL = 'SET_PROFIL'
const SHOW_ERROR = 'SHOW_ERROR'
const UP_DATA_PROFIL_ABOUT_ME = 'UP_DATA_PROFIL_ABOUT_ME'
const RESPONSE_STATUS_TEXT = 'RESPONSE_STATUS_TEXT'
const OBSOLETE_UPDATE_STATUS = 'OBSOLETE_UPDATE_STATUS'
const SET_USERS_POSTS = 'SET_USERS_POSTS'
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const ADD_IMAGE = 'ADD_IMAGE'

let initialState = {
    posts: [],
    profil: [],
    newPostText: '',
    responseStatus: null,
    statusText: null,
    error: []
}

const profilReduser = (state = initialState, action) => {
    switch (action.type) {

        case SET_USERS_POSTS:
            return {
                ...state,
                posts: action.posts
            }

        case SHOW_ERROR:
            return {
                ...state,
                error: action.error
            }

        case ADD_POST:
            let text = state.newPostText
            return {
                ...state,
                posts: [...state.posts,
                {
                    doc: {
                        id: action.userId,
                        message: text,
                        likesCount: 10
                    }
                }]
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                posts: [...state.posts],
                newPostText: action.text
            }

        case SET_PROFIL:
            {
                return {
                    ...state,
                    profil: action.profil
                }
            }

        case UP_DATA_PROFIL_ABOUT_ME:
            {
                return {
                    ...state,
                    profil: { ...state.profil, description: actions.description, motto: action.motto, status: action.status }
                }
            }

        case RESPONSE_STATUS_TEXT:

            {
                return {
                    ...state,
                    responseStatus: action.response.status,
                    statusText: action.response.statusText
                }
            }

        case OBSOLETE_UPDATE_STATUS:
            return {
                ...state,
                ...state.profil,
                status: action.status
            }

        case TOGGLE_IS_FETCHING:
            {
                return {
                    ...state,
                    isFetching: action.isFetching
                }
            }

        case ADD_IMAGE:
            {
                return {
                    ...state,
                    profil: { ...state.profil, avatar: action.avatar }
                }
            }

        default:
            return state
    }
}

export const setProfil = (profil) => ({ type: SET_PROFIL, profil })
export const upDataProfilAdoutMe = (profil) => ({ type: UP_DATA_PROFIL_ABOUT_ME, profil })
export const responseStatusText = (response) => ({ type: RESPONSE_STATUS_TEXT, response })
export const showError = (error) => ({ type: SHOW_ERROR, error })
export const obsoleteUpdateStatus = (status) => ({ type: OBSOLETE_UPDATE_STATUS, status })
export const setUsersPosts = (posts) => ({ type: SET_USERS_POSTS, posts })
export const addPost = (userId) => ({ type: ADD_POST, userId })
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, text })
export const totalIsFetchin = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const addImage = (avatar) => ({ type: ADD_IMAGE, avatar })

export const getProfile = (userId) =>
    async (dispatch) => {
        dispatch(totalIsFetchin(true))
        profileAPI.getProfile(userId)
            .then(response => {
                if (response.status === 200) {
                    dispatch(setProfil(response.data))
                }
                else {
                    dispatch(showError(response.data.error))
                }
            })
    }

export const setProfile = (userId, propername, surname, birthdate) =>
    async (dispatch) => {
        settingsAPI.setProfile(userId, propername, surname, birthdate)
            .then(response => {
                if (response.status) {
                    dispatch(setProfil(userId, propername, surname, birthdate))
                    dispatch(responseStatusText(response))
                }
                else {
                    dispatch(showError(response.data.error))
                }
            })
    }

export const updateProfileAboutMe = (userId, doc, description, motto, status) =>
    async (dispatch) => {
        settingsAPI.updateProfileAboutMe(userId, doc, description, motto, status)
            .then(response => {
                if (response.status) {
                    dispatch(upDataProfilAdoutMe(description, motto, status))
                    dispatch(responseStatusText(response))
                }
                else {
                    dispatch(showError(response.data.error))
                }
            })
    }

export const updateStatus = (userId, doc, status, date) =>
    async (dispatch) => {
        dispatch(obsoleteUpdateStatus(status))
        profileAPI.updateStatus(userId, doc, status, date)
    }

export const getPosts = (userId) =>
    async (dispatch) => {
        const data = await profileAPI.getPosts(userId)
        dispatch(setUsersPosts(data.rows))
    }

export const postPost = (userId, message) =>
    async (dispatch) => {
        profileAPI.postPost(userId, message)
        dispatch(addPost(userId))
    }

export const fileTheDownload = (userId, rev, faileData) =>
    async (dispatch) => {
        profileAPI.fileTheDownload(userId, rev, faileData)
        dispatch(addImage(faileData.name))
    }

export default profilReduser