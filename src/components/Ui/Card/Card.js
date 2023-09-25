import React from 'react';

function Card({ id, img = '', title = '', subtitle }) {
    return (
        <div>
            {
                <MainDiv>
                    <Heading1>{img}</Heading1>
                    <Heading>{title}</Heading>
                    <Ptag>{subtitle}</Ptag>
                </MainDiv>
            }
        </div>
    );
}

export default Card;