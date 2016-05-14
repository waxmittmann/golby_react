import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import golbyApp from './src/reducers'
import App from './src/App'

console.log("Golby app is: " + golbyApp)

let store = createStore(golbyApp)

console.log("Store is: ")
console.log(store)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
