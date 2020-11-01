import * as apiDialogs from "../../api/cocghdb/apiDialogs"

const SEND_MESSAGE = 'SEND_MESSAGE'
const SET_MY_DIALOGS = 'SET_MY_DIALOGS'

let initialState = {
    dialogs: []
}

const dialogsReduser = (state = initialState, action: { type: any; dialogs: any; doc: { messages: any }; author: any; message: any }) => {

    switch (action.type) {
        case SET_MY_DIALOGS:
            return {
                ...state,
                dialogs: action.dialogs
            }

        case SEND_MESSAGE:
            return {
                ...state,
                ...state.dialogs,
                messages: [...action.doc.messages,
                {
                    author: action.author,
                    message: action.message
                }
                ]
            }

        default:
            return state

    }
}

export const setMyDialods = (dialogs: any) => ({ type: SET_MY_DIALOGS, dialogs })
export const sendMessage = (doc: any, author: any, message: any) => ({ type: SEND_MESSAGE, doc, author, message })

export const getMyDialogs = (nameMy: any) =>
    async (dispatch: (arg0: { type: string; dialogs: any }) => void) => {
        const data = await apiDialogs.dialogsAPI.getMyDialogs(nameMy)
        dispatch(setMyDialods(data.rows))
    }

export const putMessageDialogs = (idDialogs: any, doc: any, author: any, message: any) =>
    async (dispatch: (arg0: { type: string; doc: any; author: any; message: any }) => void) => {
        apiDialogs.dialogsAPI.putMessageDialogs(idDialogs, doc, author, message)
        dispatch(sendMessage(doc, author, message))
    }

export default dialogsReduser