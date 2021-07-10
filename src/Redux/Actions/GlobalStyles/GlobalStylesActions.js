import {
    ORANGE
} from './GlobalStylesActionTypes'

export const orangeTheme = () => {
    return (dispatch) => {
        dispatch(
            {
                type: ORANGE,
                payload: 'orange'
            }
        )
    }
}