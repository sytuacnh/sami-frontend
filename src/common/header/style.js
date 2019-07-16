import styled from 'styled-components';
import logoPic from '../../static/logo_white_char.png'
// background: url(${logoPic});

export const HeaderWrapper = styled.div`
    margin: 0px;
    position: relative;
`;

export const LogoWrapper = styled.a.attrs({
    href: '/'
})`
    position: absolute; 
    top: 0;
    left: 0px;
    display: block;
`;

export const Logo = styled.img.attrs({
    src: logoPic,
    alt: 'sami_logo'
})`
    width: 70px;
`;