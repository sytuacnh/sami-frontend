import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import MKHeader from './components/MKHeader'
// import { actionCreators } from './store';

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