import storeReducer from "../reducers"
import { createStore } from 'redux'

const initialState = []

export const store = createStore(storeReducer, initialState)
