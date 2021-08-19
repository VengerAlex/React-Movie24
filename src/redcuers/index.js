import {combineReducers} from "redux";
import gamesReducer from "./gamesReducer";

const root = combineReducers({
    games: gamesReducer,
})

export default root



