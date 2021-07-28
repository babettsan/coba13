import axios from 'axios';

import {
    DEFAULT,
    GOOD,
    OPEN,
    BAD,
    ALIEN,
    MENU
} from './GlobalStylesActionTypes'

const getImageOfTheDay = async () => {
    try {
        const posts = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=Mni37E6Q4hn2aGWh0MORaVbV60MP8eVnN0BN9ct5`)
        return posts.data
    } catch (error) {
        console.log('Error', error.message)
    }
}

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
