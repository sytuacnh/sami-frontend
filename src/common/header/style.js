import styled from 'styled-components';
import logoPic from '../../static/logo_white_char.png'
// background: url(${logoPic});

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

export const IconSpan = styled.span.attrs({
    className: 'iconfont'
})`
    margin-right: 2px;

    &.joinicon {
        font-size: 18px;
        margin-right: 5px;
    }
`;

export const SearchWrapper = styled.div`
    margin-top: -18px;
`;