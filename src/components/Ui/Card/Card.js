import React from 'react';
import { Container, Heading, Heading2, Img, MainDiv } from './Card.Style';

function Card({ id, img = '', title = '', subtitle }) {
    return (
        <Container>
            {
                <MainDiv>
                    <Img>{img}</Img>
                    <Heading>{title}</Heading>
                    <Heading2>{subtitle}</Heading2>
                </MainDiv>
            }
        </Container>
    );
}

export default Card;