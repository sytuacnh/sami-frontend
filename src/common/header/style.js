import styled from 'styled-components';
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
    margin: 10px;
    position: relative;
    height: 200px;
    border-bottom: 1px solid #f0f0f0;
`;

export const LogoWrapper = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
`;

export const Logo = styled.img.attrs({
    src: logoPic,
    alt: 'sami_logo'
})`
    width: 100px;
`;