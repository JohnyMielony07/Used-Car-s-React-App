import React from 'react';
import styled from 'styled-components';
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';
import { Link } from 'react-router-dom';


const Wrapper = styled.div`
    box-sizing: border-box;
    margin: 2em;
    background: #F8F8F8;
    width: 15em;
    height: 19em;
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

const Anchor = styled.div`
    height: 2.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #B9F59C;

    a, a:link, a:visited, a:active {
        text-decoration: none;
        color: black;
        text-transform: uppercase;
        
    }
`;

const carCard = (props) => {

    return (
        <Auxiliary>
            <Wrapper>
                <ImageWrapper>
                    <Image src={props.img} />
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
                        <p>{props.power} HP</p>
                    </Aside>
                    <Aside>
                        <p>{props.year}</p>
                        <p>{props.transmission}</p>
                        <p>{props.type}</p>
                    </Aside>

                </Description>
                <Anchor>
                    <Link to={'car/' + props.id} key={props.id}>
                        <p>Read more</p>
                    </Link>
                </Anchor>
            </Wrapper>
        </Auxiliary>
    )
}

export default carCard;