import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
// own global style
// import { Globalstyle } from './style';
import { GlobalIconfont } from './static/iconfont/iconfont';
import 'assets/scss/material-kit-pro-react.scss?v=1.7.0'
import store from './store'
import Header from './common/header/index';
import Footer from './common/footer/index';
import Home from './pages/home';

function App() {
    return (
        <Provider store={store}>
            <GlobalIconfont/>
            <BrowserRouter>
                <Header />
                <Route path='/' exact component={Home}></Route>
                <Footer />
            </BrowserRouter>
        </Provider>
    );
}

export default App;


