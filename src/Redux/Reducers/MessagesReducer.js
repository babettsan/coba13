import {
    GET_MESSAGES
} from '../Actions/Messages/MessagesActionTypes'

const initialState = {
    messages: []
}

const stylesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES: {
            return {
                ...state,
                messages: action.payload
            }
        }
        default:
            return state
    }
}

export default stylesReducer