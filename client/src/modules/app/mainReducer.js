import { combineReducers } from "redux";

import themeSwitch from '../../components/ThemeSwitch/reducer'

export const mainReducer = combineReducers({
    themeSwitch,
});