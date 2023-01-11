const TURN_ON_COUNTER_1 = 'TURN_ON_COUNTER_1'

let initialTestSistems = {
    counter: 0.7,
    thrust: 1.1,
}

const applicationReduser = (state = initialTestSistems, action) => {
    switch (action.type) {

        case TURN_ON_COUNTER_1:
            return {
                ...state,
                counter: action.counter,
            }

        default:
            return state
    }
}

export const turnOnTheCounter = (counter) => ({ type: TURN_ON_COUNTER_1, counter })

export const startCounter = (counter) =>
    async (dispatch) => {

        if (counter < initialTestSistems.thrust) {
            setTimeout(() => dispatch((turnOnTheCounter(counter + 0.01))), 10)
        }
        if (counter > initialTestSistems.thrust) {
            setTimeout(() => dispatch((turnOnTheCounter(counter - 0.001))), 10)
        }
    }

export default applicationReduser