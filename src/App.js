import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store'
import SectionNavbars from './SectionNavbars'
// own global style
import { Globalstyle } from './style';
// global style of Material Kit
import 'assets/scss/material-kit-pro-react.scss?v=1.7.0';

// import { createBrowserHistory } from "history";
// var hist = createBrowserHistory();
// for Router

function App() {
    return (
        <Provider store={store}>
            <Globalstyle XXColor/>
            <BrowserRouter>
                <Route path='/' exact component={SectionNavbars}></Route>
            </BrowserRouter>
        </Provider>
    );
}

export default App;


