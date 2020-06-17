const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SETCURRONTPAGE = 'SETCURRONTPAGE'
const SETTOTALROWS = 'SETTOTALROWS'

let initialState = {

    users: [],
    pageSaze: 3,
    totalPageCount: 0,
    currontPage: 1
}

const friendsReduser = (state = initialState, action) => {
    //debugger
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, follow: true }
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, follow: false }
                    }
                    return u
                })
            }

        case SET_USERS:
            {
                return {
                    ...state,
                    users: action.users
                }
            }

        case SETCURRONTPAGE:
            {
                return {
                    ...state,
                    currontPage: action.currontPage
                }
            }

        case SETTOTALROWS:
            {
                return {
                    ...state,
                    totalPageCount: action.totalRows
                }
            }


        default:
            return state
    }

}
export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrontPageAC = (currontPage) => ({ type: SETCURRONTPAGE, currontPage })
export const setTotalRowsAC = (totalRows) => ({ type: SETTOTALROWS, totalRows })

export default friendsReduser