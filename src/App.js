import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {loadGamesCreator} from "./actions/gamesAction";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGamesCreator())
    }, [])

    return (
        <div>
            dsa
        </div>
    )
}

export default App;
