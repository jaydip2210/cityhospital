import styled from "styled-components";


export const Baseinput = styled.input`
    height: 44px;
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
    padding: 10px !important;

    &:focus{
        border-color: #FF6337;
        box-shadow: none;
    }
`
export const InputError = styled.span`
    color: red;
    display: ${props => props.errorText ? 'inline-block' : 'none'}
`