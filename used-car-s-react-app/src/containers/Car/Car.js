import React, { Component } from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from 'axios';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import styled from 'styled-components';

import ImageSlider from './ImageSlider/ImageSlider';

const NameWrapper = styled.div`
    height: 4.5em;
    background-color: blue;
    color: white;
    display: flex;
    justify-content: center;

    p {
        width: 75%;
        margin: auto;
        text-align: left;
        font-size: 2.2em;
        text-transform: uppercase;
    }
`;

const InfoWrapper = styled.div`
    width: 75%;
    margin: 0 auto;
    display: flex;
`;

const SliderWrapper = styled.div`
    width: 75%;
    margin: 0 auto;
`;

const Image = styled.div`
    width: 65%;
    height: 100%;

    img {
        width: 100%;
    }
`;

const Description = styled.div`
    font-size: 1.5em;
    width: 75%;
    margin: 2em auto;
    box-shadow: 0px 2px 8px -1px rgba(0,0,0,0.75);
    
    div {
        display: flex;
        flex-wrap: wrap;
        
        justify-content: ${({ base }) => base ? 'space-between' : 'space-around'};
    }
    
`;

const Feature = styled.div`
    width: 20em;

`;

const Info = styled.div`
`;

const DescRow = styled.div`
    margin: 0 auto;
    width: 70%;
    :not(last-child) {
        ${({ bottom }) => bottom ? 'border-bottom: .05em solid rgba(0,0,0,0.75)' : null};
        
    }
    
`;

const DescTitle = styled.p`
    text-transform: uppercase;
    font-weight: 600;
    padding: .2em 0;
`;

class Car extends Component {
    state = {
        car: null,
        loading: true
    }

    componentDidMount() {

        axios.get("https://used-cars-react-app.firebaseio.com/Cars/" + this.props.match.params.id + ".json")
            .then(response => {
                this.setState({ car: response.data, loading: false });
                console.log(this.state.car.engine);
            });
    }


    render() {

        let car = null;


        if (this.state.loading) {
            car = <Spinner />
        } else {
            const images = this.state.car.images;
            car = (
                <Auxiliary>
                    <NameWrapper>
                        <p>{this.state.car.Make} {this.state.car.Model}</p>
                    </NameWrapper>
                    <InfoWrapper>
                        <Image>
                            <img src={images[2]} />

                        </Image>

                        <Info>
                            <p>Price:</p>
                            {this.state.car.price}

                            <p>Mileage</p>
                            {this.state.car.mileage}
                        </Info>
                    </InfoWrapper>
                    <SliderWrapper>
                        <ImageSlider images={images} />
                    </SliderWrapper>
                    <Description key="1" base>
                        <DescTitle>Base Specifications</DescTitle>
                        <DescRow bottom>
                            <p>Transmission</p>
                            <p>{this.state.car.transmission}</p>
                        </DescRow>
                        <DescRow bottom>
                            <p>Drive</p>
                            <p>{this.state.car.drive}</p>
                        </DescRow>
                        <DescRow bottom>
                            <p>Engine</p>
                            <p>{this.state.car.engine_capacity} {this.state.car.engine}</p>
                        </DescRow>
                        <DescRow>
                            <p>Horsepower</p>
                            <p>{this.state.car.power} HP</p>
                        </DescRow>
                    </Description>


                    <Description key="2">
                        <DescTitle>Key features</DescTitle>
                        <div>
                            {this.state.car.features.split(', ').map(el => (
                                <Feature key={el}>
                                    {el}
                                </Feature>
                            ))}
                        </div>

                    </Description>
                </Auxiliary>)
        }


        return (
            <div>
                {car}
            </div>
        )
    }
}

export default Car;