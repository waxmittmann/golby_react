import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import golbyApp from './src/reducers'
import App from './src/App'

let store = createStore(golbyApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
