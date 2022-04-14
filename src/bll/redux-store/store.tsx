import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {totalNumberReducer} from "../reducers/totalNumberReducer";
import {allCountriesReducer} from "../reducers/allCountriesReducer";

let rootReducer = combineReducers({
  totalNumbers: totalNumberReducer,
  allCountries: allCountriesReducer
})

export let store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>