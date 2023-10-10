import React from 'react';
import { Container, Heading, Heading2, Img, MainDiv } from './Card.Style';
import Button from '../Button/Button';

function Card({ id, img = '', title = '', subtitle, btnvalue='',btnClick='' }) {
    return (
        <Container>
            {
                <MainDiv>
                    <Img>{img}</Img>
                    <Heading>{title}</Heading>
                    <Heading2>{subtitle}</Heading2>
                    {btnvalue !== '' ? <Button onClick={btnClick}>{btnvalue}</Button> : null}
                </MainDiv>
            }
        </Container>
    );
}

export default Card;