const SET_PIN = 'SET_PIN'

let initialPines = {
    pin: [
        1,
        2,
        3,
        4, 5, 6, 7, 8, 9,
        "10B", 11, 12, 13, 14,
        15,
        16,
        17,
        [
            110010
        ],
        19,
        20,
        21,
        22,
        23,
        24,
        25, 26, 27, 28, 29, 4, 5, 6,
        7, 8, 9, 10, 11, 12
    ]
}

export const pinesRedusor = (state = initialPines, action) => {
    switch (action.type) {

        case SET_PIN:
            debugger
            return {
                ...state,
                ...state.pin[action.namberPines] = action.znacheneePines
            }

        default:
            return state
    }
}

export const setPin = (namberPines, znacheneePines) => ({ type: SET_PIN, namberPines, znacheneePines })

export default pinesRedusor