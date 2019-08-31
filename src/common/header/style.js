import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    
    .link {
        color: #333333;
    } 

    .link:hover {
        color: white;
    } 
    
`;

export const IconSpan = styled.span.attrs({
    className: 'iconfont'
})`
    margin-right: 3px;

    &.joinIcon {
        font-size: 18px;
        margin-right: 5px;
    }

    &.dropDownIconFont {
        font-size: 25px;
        margin-top: 0px;
    }

`;