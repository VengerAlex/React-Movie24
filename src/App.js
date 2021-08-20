import React, {useEffect} from "react";
import {Route} from "react-router-dom";

import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";

const App = () => {

    return (
        <div className='App'>
            <GlobalStyle />
            <Route path={['/game/:id', '/']}>
                <Home/>
            </Route>
        </div>
    )
}

export default App;
