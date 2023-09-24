import styled from "styled-components";

export const HeadHeading = styled.h1`
    font-size: 30px;
    margin: 0;
    padding: 0;
    line-height: 1;
    font-weight: 700;
    letter-spacing: 0.5px;
    font-family: "Poppins", sans-serif;
    float: left;
`

export const HeadHeading2 = styled.h2`
    font-size: 21px;
    color: #FF6337;
    margin-top: 4px;
`

export const HomeHeading = styled.h1`
    margin: 0;
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    text-transform: uppercase;
    color: #2c4964;
`

export const HomeHeading2 = styled.h2`
    color: #2c4964;
    margin: 10px 0 0 0;
    font-size: 24px;
`

export const Heading = styled.h2`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
    color: #2c4964;
    font-family: "Raleway", sans-serif;

    &:before{
        content: '';
        position: absolute;
        display: block;
        width: 120px;
        height: 1px;
        background: #ddd;
        bottom: 1px;
        left: calc(50% - 60px);
        box-sizing: border-box;
    }

    &:after{
        content: '';
        position: absolute;
        display: block;
        width: 40px;
        height: 3px;
        background: #FF6337;
        bottom: 0;
        left: calc(50% - 20px);
        box-sizing: border-box;
    }
`

export const Heading2 = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0 5px 0;
    color: #111;
    font-family: "Raleway", sans-serif;
`

export const DHeading = styled.h3`
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #2c4964;
    font-family: "Raleway", sans-serif;
`

export const DoctHeading = styled.h4`
    font-weight: 700;
    margin-bottom: 5px;
    font-size: 20px;
    color: #2c4964;
    font-family: "Raleway", sans-serif;
`

export const AboutHeading = styled.h3`
    font-size: 28px;
    font-weight: 700;
    color: #2c4964;
    margin-bottom: 15px;
    font-family: "Raleway", sans-serif;
`

export const ContactHeading = styled.h4`
    padding: 0 0 0 60px;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #2c4964;
    font-family: "Raleway", sans-serif;
`