import React from 'react';
import './App.css';
import './lol.css'
import {BrowserRouter as Router} from "react-router-dom";
import BaseRouter from "./router";

import 'antd/dist/antd.css';
import MainPage from "./MainPage";

function App() {

    return (
        <Router>
            <div>
                <MainPage>
                    <BaseRouter/>
                </MainPage>
            </div>
        </Router>
    );
}

export default App;
