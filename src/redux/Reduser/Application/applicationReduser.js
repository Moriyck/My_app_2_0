const TURN_ON_COUNTER_1 = 'TURN_ON_COUNTER_1'
const NEW_THRUST = 'NEW_THRUST'

let initialTestSistems = {
    counter: 0,
    arow: 0.7,
    counterC: 0,
    thrust: 2.1,
}

const applicationReduser = (state = initialTestSistems, action) => {

    switch (action.type) {

        case TURN_ON_COUNTER_1:

            return {
                ...state,
                counter: action.counter,
                counterC: action.counterC,
                arow: action.arow,
            }

        case NEW_THRUST:

            return {
                ...state,
                thrust: action.thrust,
                counter: 0

            }

        default:
            return state
    }
}

export const turnOnTheCounter = (counter, arow, counterC) => ({ type: TURN_ON_COUNTER_1, counter, arow, counterC })
export const newChangeThrust = (thrust) => ({ type: NEW_THRUST, thrust })

export const startCounter = (counter, arow, counterC) =>
    async (dispatch) => {

        if (counter < 100) {
            setTimeout(() => dispatch((turnOnTheCounter(counter + 0.1, arow, counterC))), 10)
        }

    }

export const newThrust = (thrust) =>
    async (dispatch) => {

        dispatch((newChangeThrust(thrust)))

    }
export default applicationReduser