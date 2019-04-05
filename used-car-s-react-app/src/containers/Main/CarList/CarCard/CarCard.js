import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
    `;

const Wrapper = styled.div`
    box-sizing: border-box;
    margin: 2em;
    background: #F8F8F8;
    width: 15em;
    height: 16.5em;
    box-shadow: 0px 2px 8px -1px rgba(0,0,0,0.75);
    `;

const ModelWrapper = styled.div`
    box-sizing: border-box;
    width: 50%;
    p {
        margin: 0;
        text-align:left;        
    }
    `;

const ImageWrapper = styled.figure`
    height: 7em;
    margin: 0;
    overflow: hidden;
    `;

const BaseInfo = styled.div`
    display: flex;
    align-items: center;
    padding: .7em;
    height: 3.5em;
    `;

const PriceInfo = styled.div`
    box-sizing: border-box;
    width: 50%;
    p {
        text-align: right;
    }
    `;

const Image = styled.img`
    width: 100%;
    `;

const Description = styled.div`
    display: flex;
    box-sizing: border-box;
    background-color: #DCDCDC;
    height: 6em;
    padding: .7em;
    `;

const Aside = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: ${({ left }) => left ? 'flex-start' : 'flex-end'};
    justify-content: center;
    p {
        margin: 0;
    }
    `;

const RightAside = styled.div`
    width: 50%;
    p {
        margin: 0;
        text-align: right;
    }
    `;

const carCard = (props) => {

    const src = "data:image/png;base64," + props.img;

    return (
        <Auxiliary>
            <GlobalStyle />
            <Wrapper>
                <ImageWrapper>
                    <Image src={src} />
                </ImageWrapper>

                <BaseInfo>
                    <ModelWrapper>
                        <p>{props.make}</p>
                        <p>{props.model}</p>
                    </ModelWrapper>
                    <PriceInfo>
                        <p>	&#x24;{props.price}</p>
                    </PriceInfo>
                </BaseInfo>

                <Description>
                    <Aside left>
                        <p>{props.mileage} Miles</p>
                        <p>{props.engine}</p>
                        <p>{props.power} KM</p>
                    </Aside>
                    <Aside>
                        <p>{props.year}</p>
                        <p>{props.transmission}</p>
                        <p>{props.type}</p>
                    </Aside>

                </Description>
            </Wrapper>
        </Auxiliary>
    )
}

export default carCard;