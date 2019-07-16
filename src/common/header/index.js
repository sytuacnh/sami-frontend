import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import { actionCreators } from './store';

import { 
    HeaderWrapper,
    LogoWrapper,
    Logo
} from './style';

class Header extends PureComponent {

    render() {
        return (
            <HeaderWrapper>
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
            </HeaderWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
