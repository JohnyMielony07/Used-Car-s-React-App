import React from 'react';
import styled from 'styled-components';

const carCard = (props) => {

    const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
  display: inline-block;
`;

    return (
        <Wrapper>
            <p>{props.make}</p>
            <p>{props.model}</p>
        </Wrapper>
    )
}

export default carCard;