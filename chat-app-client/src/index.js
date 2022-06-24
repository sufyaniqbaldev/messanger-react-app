import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import actionCable from 'actioncable'

import App from './App'
import store from './app/store'

const CableApp = {}
CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable') // change to whatever port your server uses
export const ActionCableContext = createContext()

ReactDOM.render(
  <Provider store={store}>
    // omitted any other providers we may have
    <ActionCableContext.Provider value={CableApp.cable}>
      <App />
    </ActionCableContext.Provider>
  </Provider>,
  document.getElementById('root')
)
