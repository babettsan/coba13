import {
    GET_MESSAGES
} from '../Messages/MessagesActionTypes'

import axios from 'axios'

const BASE_URL = 'https://coba13.herokuapp.com'

const getAllMessages = async () => {
    try {
        const messages = await axios.get(`${BASE_URL}/messages`)
        return messages.data
    } catch (error) {
        console.log('Error', error.message)
    }
}

export const getMessages = () => {
    return async (dispatch) => {
        dispatch(
            {
                type: GET_MESSAGES,
                payload: await getAllMessages()
            }
        )
    }
}