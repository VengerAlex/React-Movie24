import axios from "axios";
import {popularGamerURL, upcomingGamerURL, newGamerURL} from "../api";

export const loadGamesCreator = () => async (dispatch) => {
    //fetch
    const popularData = await axios.get(popularGamerURL());
    const upComingData = await axios.get(upcomingGamerURL());
    const newGagesData = await axios.get(newGamerURL());

    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularData.data.results,
            newgames: upComingData.data.results,
            upcoming: newGagesData.data.results
        }
    })
}

