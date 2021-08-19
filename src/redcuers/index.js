import {combineReducers} from "redux";
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";

const root = combineReducers({
    games: gamesReducer,
    detail : detailReducer
})

export default root



