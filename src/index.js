// Entry point
// js, html, css all in JS

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // == ./App.js
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import "assets/scss/material-kit-pro-react.scss?v=1.7.0";

// ReactDOM.render(<App />, document.getElementById('root'));

var hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </Router>, 
    document.getElementById("root")
);

console.log(hist)
