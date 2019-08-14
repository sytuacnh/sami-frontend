import React from 'react';
// import compose from 'recompose/compose'
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
import RegisterProgram from './pages/register_program';
import Donate from './pages/donate';
// import withStyles from "@material-ui/core/styles/withStyles";
// import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
// import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";

function App() {
    return (
        <Provider store={store}>
            <GlobalIconfont/>
            <BrowserRouter>
                <Header />

                <Route path='/' exact component={Home}></Route>
                <Route path='/donate' exact component={Donate}></Route>
                <Route path='/register-program' exact component={RegisterProgram}></Route>
                
                <Footer />
            </BrowserRouter>
        </Provider>
    );
}

export default App;

// does not work
// export default compose(
    // withStyles(landingPageStyle),
    // withStyles(blogPostsPageStyle)
// )(App)
