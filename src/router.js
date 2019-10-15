import React from "react";
import { Route } from 'react-router-dom';
import MainPage from "./MainPage";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

const d = () => <div/>;

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={d} />
        <Route exact path='/firstPage/' component={FirstPage} />
        <Route exact path='/secondPage/' component={SecondPage} />

        <Route exact path='/thirdPage/' component={ThirdPage} />
    </div>
);

export default BaseRouter;