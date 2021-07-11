import {
    DEFAULT,
    GOOD,
    OPEN,
    BAD,
    ALIEN
} from '../Actions/GlobalStyles/GlobalStylesActionTypes'

const initialState = {
    theme: 'default',
}

const stylesReducer = (state = initialState, action) => {
    switch (action.type) {
        case DEFAULT: {
            return {
                ...state,
                theme: action.payload
            }
        }
        case GOOD: {
            return {
                ...state,
                theme: action.payload
            }
        }
        case OPEN: {
            return {
                ...state,
                theme: action.payload
            }
        }
        case BAD: {
            return {
                ...state,
                theme: action.payload
            }
        }
        case ALIEN: {
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