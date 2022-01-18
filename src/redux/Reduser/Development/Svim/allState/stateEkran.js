const SET_PROFIL = 'SET_PROFIL'

let initialEkran = {
    text: null,
    text1: 'MANUAL',
    text2: 'AUTO'
}

const ekranRedusor = (state = initialEkran, action) => {
    switch (action.type) {

        case SET_PROFIL:
            debugger
            return {
                ...state,
                text: action.newText
            }

        default:
            return state
    }

}

export const smenaNadpisi = (newText) => ({ type: SET_PROFIL, newText })

export default ekranRedusor