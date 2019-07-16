import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import MKHeader from './MKHeader'
// import { actionCreators } from './store';

// import {
//     HeaderWrapper
// } from './style';


class Header extends PureComponent {

    render() {
        return (
            <MKHeader />
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)