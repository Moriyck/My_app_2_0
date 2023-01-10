const TURN_ON_COUNTER = 'TURN_ON_COUNTER'

let initialTestSistems = {
    preloader: 0,
    counter: 0,
}

const preloaderReduser = (state = initialTestSistems, action) => {
    switch (action.type) {

        case TURN_ON_COUNTER:
            return {
                ...state,
                preloader: action.preloader,
                counter: action.counter,
            }

        default:
            return state
    }
}

export const turnOnTheCounter = (preloader, counter) => ({ type: TURN_ON_COUNTER, preloader, counter })

export const startCounter = (preloader, counter) =>
    async (dispatch) => {

        if (counter < 100) {
            setTimeout(() => dispatch((turnOnTheCounter(preloader + 1, counter + 1))), 10)
        }
        if (counter === 100) {
            setTimeout(() => dispatch((turnOnTheCounter(preloader = 20, counter = 100))), 1000)
        }
    }

export default preloaderReduser