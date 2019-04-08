import React, { Component } from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from 'axios';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import styled from 'styled-components';



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
        justify-content: space-around;
    }
`;

const Feature = styled.div`
    width: 20em;

`;

const Info = styled.div`

`;

class Car extends Component {
    state = {
        car: null,
        loading: true
    }

    componentDidMount() {

        axios.get("https://used-cars-react-app.firebaseio.com/Cars/1.json")
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
            const src = "data:image/png;base64," + this.state.car.img;
            car = (
                <Auxiliary>
                    <NameWrapper>
                        <p>{this.state.car.Make} {this.state.car.Model}</p>
                    </NameWrapper>
                    <InfoWrapper>
                        <Image>
                            <img src={src} />
                        </Image>
                        <Info>
                            <p>Price:</p>
                            {this.state.car.price}

                            <p>Mileage</p>
                            {this.state.car.mileage}
                        </Info>
                    </InfoWrapper>


                    <Description>
                        Key features:
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