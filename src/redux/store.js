import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'

import rootReducer from './root.reducer'

const middlewares = [logger]
// applyMiddleware allows us to use multiple middlewares based from the constant middleware array list
export const store = createStore(rootReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store)
