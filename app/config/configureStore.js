import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from '../reducers'

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware // lets us dispatch() functions
    )
  )
  return createStore(reducer, initialState, enhancer)
}
