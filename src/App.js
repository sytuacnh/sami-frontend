import React from 'react';
// import 'babel-polyfill'; // for redux-form-saga
// import compose from 'recompose/compose'
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
// import { Globalstyle } from './style';  // global style. not using
import { GlobalIconfont } from './static/iconfont/iconfont';
import 'assets/scss/material-kit-pro-react.scss?v=1.7.0'
import store from './store'
import Header from './common/header/index';
import Footer from './common/footer/index';
import Home from './pages/home';
import RegisterProgram from './pages/register_program';
import Donate from './pages/donate';
import About from './pages/about';
import Tutoring from './pages/tutoring';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import SummerAtSaMi2019 from './pages/events/summer_at_sami/summer_at_sami_2019';
import SummerAtSaMi2020 from './pages/events/summer_at_sami/summer_at_sami_2020';
import SummerAtSaMi2021 from './pages/events/summer_at_sami/summer_at_sami_2021';
import SummerAtSaMi2022 from './pages/events/summer_at_sami/summer_at_sami_2022';
import PiDayCelebration2019 from './pages/events/pi_day_celebration/pi_day_celebration_2019';
import PiDayCelebration2020 from './pages/events/pi_day_celebration/pi_day_celebration_2020';
import PiDayCelebration2021 from './pages/events/pi_day_celebration/pi_day_celebration_2021';
import FreeTutoring20182019 from './pages/events/free_tutoring/free_tutoring_2018_2019';
import FreeTutoring20192020 from './pages/events/free_tutoring/free_tutoring_2019_2020';
import FreeTutoring20202021 from './pages/events/free_tutoring/free_tutoring_2020_2021';
import FreeTutoring20212022 from './pages/events/free_tutoring/free_tutoring_2021_2022';
import FreeTutoring20222023 from './pages/events/free_tutoring/free_tutoring_2022_2023';
import CastingYourFutureScholarship from './pages/events/scholarship/casting_your_future_scholarship';
import TheFirstInternship from './pages/events/scholarship/the_first_internship';

function App() {
    return (
        <Provider store={store}>
            <GlobalIconfont/>
            <BrowserRouter>
                <Header />

                <Route path='/' exact component={Home}></Route>
                <Route path='/donate' exact component={Donate}></Route>
                <Route path='/contact' exact component={Contact}></Route>
                <Route path='/gallery' exact component={Gallery}></Route>
                <Route path='/register-program' exact component={RegisterProgram}></Route>
                <Route path='/about' exact component={About}></Route>
                <Route path='/tutoring' exact component={Tutoring}></Route>
                <Route path='/summer-at-sami-2019' exact component={SummerAtSaMi2019}></Route>
                <Route path='/summer-at-sami-2020' exact component={SummerAtSaMi2020}></Route>
				<Route path='/summer-at-sami-2021' exact component={SummerAtSaMi2021}></Route>
				<Route path='/summer-at-sami-2022' exact component={SummerAtSaMi2022}></Route>
                <Route path='/pi-day-celebration-2019' exact component={PiDayCelebration2019}></Route>
                <Route path='/pi-day-celebration-2020' exact component={PiDayCelebration2020}></Route>
				<Route path='/pi-day-celebration-2021' exact component={PiDayCelebration2021}></Route>				
                <Route path='/free-tutoring-2018-2019' exact component={FreeTutoring20182019}></Route>
                <Route path='/free-tutoring-2019-2020' exact component={FreeTutoring20192020}></Route>
                <Route path='/free-tutoring-2020-2021' exact component={FreeTutoring20202021}></Route>
				<Route path='/free-tutoring-2021-2022' exact component={FreeTutoring20212022}></Route>
				<Route path='/free-tutoring-2022-2023' exact component={FreeTutoring20222023}></Route>
                <Route path='/casting-your-future-scholarship' exact component={CastingYourFutureScholarship}></Route>
                <Route path='/the-first-internship' exact component={TheFirstInternship}></Route>                
                <Footer />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
