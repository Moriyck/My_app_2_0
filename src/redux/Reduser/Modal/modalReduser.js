//import { myAssetsAPI } from "../../../../api/cocghdb/apiAssets"

const ACTIVATE_OR_DEACTIVATE_WINDOW_MODAL = 'ACTIVATE_OR_DEACTIVATE_WINDOW_MODAL'

let initialState = {
    modalActive: false,
    modalContent: null,
}

const modalReduser = (state = initialState, action) => {
    switch (action.type) {

        case ACTIVATE_OR_DEACTIVATE_WINDOW_MODAL:
            return {
                ...state,
                modalActive: action.modalActive,
                modalContent: action.modalContent,
            }

        default:
            return state
    }
}

export const modalActive = (
    modalActive,
    modalContent
) => ({
    type: ACTIVATE_OR_DEACTIVATE_WINDOW_MODAL,
    modalActive,
    modalContent
})
export const setModalActiveElements = (modalActive) => ({ type: ACTIVATE_OR_DEACTIVATE_WINDOW_MODAL, modalActive })

export default modalReduser