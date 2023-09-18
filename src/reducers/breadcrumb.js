import * as types from '../common/types'

const initialState = {
    list: [],
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case types.SET_DATA:
            return {
                list: payload
            }

        default:
            return state
    }
}
