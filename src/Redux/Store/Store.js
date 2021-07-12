import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import GlobalStyles from '../Reducers/GlobalStylesReducer'
import Messages from '../Reducers/MessagesReducer'

const rootReducer = combineReducers({
    theme: GlobalStyles,
    messages: Messages
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store