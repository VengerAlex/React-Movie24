import React, {useEffect} from "react";

import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";

const App = () => {

    return (
        <div className='App'>
            <GlobalStyle />
                <Home/>
        </div>
    )
}

export default App;
