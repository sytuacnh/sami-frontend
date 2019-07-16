import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import MKFooter from './MKFooter'
// import { actionCreators } from './store';

// import {
//     HeaderWrapper
// } from './style';


class Footer extends PureComponent {

    render() {
        return (
            <MKFooter />
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer)