import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css'
import App from './App'

import { store, persistor } from './redux/store'

ReactDOM.render(
  // Provider allows us to access the store in our application
  <Provider store={store}>
    {/* BrowserRouter gives our app all of the functionality of routing */}
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
