import React from 'react';
import { Container, Heading, Heading2, Img, MainDiv } from './Card.Style';
import Button from '../Button/Button';

import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';

function Card({ id, img = '', title = '', subtitle, btnvalue = '', btnClick, favClick, favStatus }) {
    console.log(favStatus);
    return (
        <Container>
            {
                <MainDiv>
                    <br></br>
                    <IconButton  aria-label="cart" onClick={favClick}>
                            {favStatus ? <FavoriteIcon /> : <FavoriteBorderIcon color="action" />}
                            {/* <MailIcon color="action" /> */}
                    </IconButton >

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