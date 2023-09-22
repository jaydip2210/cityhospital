import { isDisabled } from "@testing-library/user-event/dist/utils";
import styled from "styled-components";

const Basebutton = styled.button`
    border: 0;
    padding: 10px 35px;
    transition: 0.4s;
    border-radius: 50px;
    cursor: pointer
`

export const PrimaryButton = styled(Basebutton)`
    background: ${props => props.disabled ? 'gray' : '#FF6337'};
    color: #fff;

    &:hover{
        background: ${props => props.disabled ? 'gray' : 'blue'};
    }
`

export const SecondaryButton = styled(Basebutton)`
    background-color: ${props => props.disabled ? 'gray' : '#000'};
    color: #fff;
`

export const OutlineButton = styled(Basebutton)` 
    border: 2px solid black;
    color: #000;
    background-color: #fff
`