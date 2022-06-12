import {createStore, combineReducers, applyMiddleware} from "redux" 
import thunk from "redux-thunk"
import  { composeWithDevTools } from 'redux-devtools-extension'

import matches from "./matches"
import subjects from "./subjects"
import tagSubjects from "./tagSubjects"

const reducers = combineReducers({
    matches , subjects , tagSubjects
})

const initialState = []
const middlewares = [thunk]


const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middlewares)))


export default store

