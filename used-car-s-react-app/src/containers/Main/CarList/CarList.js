import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import axios from 'axios';
import styled from 'styled-components';

import CarCard from './CarCard/CarCard';

const Wrapper = styled.div`
  display:flex;
  justify-content: center;
`;

class carList extends Component {
    state = {
        carList: []
    }


    componentDidMount() {

        axios.get("https://used-cars-react-app.firebaseio.com/car-s-list.json")
            .then(response => {
                this.setState({ carList: response.data });
                console.log(this.state);
            });
    }

    render() {
        return (
            <Auxiliary>
                Car's list here
                <Wrapper>
                    {this.state.carList.map(car => {
                        if (car) {
                            console.log(car.main_image);
                            return (
                                <CarCard
                                    key={car.id}
                                    make={car.make}
                                    model={car.model}
                                    img={car.main_image}
                                    power={car.power}
                                    engine={car.engine}
                                    mileage={car.mileage}
                                    price={car.price}
                                    transmission={car.transmission}
                                    type={car.type}
                                    year={car.year}
                                     />
                            )
                        }
                    })}
                </Wrapper>
            </Auxiliary>
        )
    }
}

export default carList;