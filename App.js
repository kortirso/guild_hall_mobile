import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './app/store'
import AppContainer from './app/containers/AppContainer'
import LocalStorage from './app/config/LocalStorage'

store.subscribe(() => {
  LocalStorage.saveState(store.getState())
})

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
