import React from 'react';
import { Container, Heading, Heading2, Img, MainDiv } from './Card.Style';
import Button from '../Button/Button';

import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Card({ id, img = '', title = '', subtitle, btnvalue = '', btnClick, favClick, favStatus }) {
    return (
        <Container>
            {
                <MainDiv>
                    <br></br>
                    <FavoriteBorderIcon aria-label="cart" onClick={favClick}>
                        <Badge color="primary">
                            {favStatus ? <FavoriteIcon /> : <FavoriteBorderIcon color="action" />}
                            {/* <MailIcon color="action" /> */}
                        </Badge>
                    </FavoriteBorderIcon>

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