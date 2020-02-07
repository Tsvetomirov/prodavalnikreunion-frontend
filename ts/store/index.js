import {combineReducers, createStore} from "redux";
import {testreducer} from "./reducers/testreducers";

export const combinedReducers = combineReducers(
    {
        test:testreducer
    });

export const store = createStore(combinedReducers);