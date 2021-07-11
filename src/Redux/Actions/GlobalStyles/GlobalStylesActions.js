import {
    DEFAULT,
    GOOD,
    OPEN,
    BAD,
    ALIEN
} from './GlobalStylesActionTypes'

export const defaultTheme = () => {
    return (dispatch) => {
        dispatch(
            {
                type: DEFAULT,
                payload: 'default'
            }
        )
    }
}

export const goodTheme = () => {
    return (dispatch) => {
        dispatch(
            {
                type: GOOD,
                payload: 'good'
            }
        )
    }
}

export const openTheme = () => {
    return (dispatch) => {
        dispatch(
            {
                type: OPEN,
                payload: 'open'
            }
        )
    }
}

export const badTheme = () => {
    return (dispatch) => {
        dispatch(
            {
                type: BAD,
                payload: 'bad'
            }
        )
    }
}

export const alienTheme = () => {
    return (dispatch) => {
        dispatch(
            {
                type: ALIEN,
                payload: 'alien'
            }
        )
    }
}