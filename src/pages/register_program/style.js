import styled from 'styled-components';

export const RegisterFormWrapper = styled.div`
    .link { 
        color: #FF0000; 
    }
`;

export const TabContentWrapper = styled.div`
    p {
        font-size: 16px;
        text-align: left;
    }
`;

export const ProgramFormWrapper = styled.div`
    display: none;
    
    &.clicked {
        display: block;
    }
`;