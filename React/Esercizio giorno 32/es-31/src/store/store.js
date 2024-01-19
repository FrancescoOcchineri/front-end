import favouritesReducer from "../reducers/favouritesReducer"
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { thunk } from 'redux-thunk'

const state = {
    company: [],
    favourites: [],
}

const bigreducers = combineReducers({
    favourites: favouritesReducer,
})

export const store = createStore(bigreducers, state, applyMiddleware(thunk))


