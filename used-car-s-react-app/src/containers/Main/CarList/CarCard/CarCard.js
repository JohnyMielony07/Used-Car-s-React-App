import React from 'react';
import styled from 'styled-components';

const carCard = (props) => {

    const Wrapper = styled.div`
  padding: 4em;
  margin: 2em;
  background: orangered;
  width: 10em;
`;

const Image = styled.img`
width: 100%;
`;

const src = "data:image/png;base64," + props.img;

    return (
        <Wrapper>
            <Image src={src} />
            <p>{props.make}</p>
            <p>{props.model}</p>
        </Wrapper>
    )
}

export default carCard;