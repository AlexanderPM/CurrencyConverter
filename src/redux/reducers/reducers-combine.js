import { combineReducers } from "redux";
import valuteState from "./reducers-valute-state-update";
import activeValuteState from "./reducers-valute-active";


export default combineReducers ({
        valuteState ,
        activeValuteState,
    });