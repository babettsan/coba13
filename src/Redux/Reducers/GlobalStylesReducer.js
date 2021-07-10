import {
    ORANGE
} from '../Actions/GlobalStyles/GlobalStylesActionTypes'

const initialState = {
    theme: 'orange',
}

const stylesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORANGE: {
            return {
                ...state,
                theme: action.payload
            }
        }
        default:
            return state
    }
}

export default stylesReducer