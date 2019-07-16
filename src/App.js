import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
// own global style
import { Globalstyle } from './style';
// global style of Material Kit
import 'assets/scss/material-kit-pro-react.scss?v=1.7.0';

import store from './store'
import Header from './common/header/index';
import Home from './pages/home';

// import { createBrowserHistory } from "history";
// var hist = createBrowserHistory();
// for Router

function App() {
    return (
        <Provider store={store}>
            <Globalstyle XXColor/>
            <Header />
            <BrowserRouter>
                <Route path='/' exact component={Home}></Route>
            </BrowserRouter>
        </Provider>
    );
}

export default App;


