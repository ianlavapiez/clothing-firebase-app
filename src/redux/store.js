import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReducer from './root.reducer'

const middlewares = [logger]
// applyMiddleware allows us to use multiple middlewares based from the constant middleware array list
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
