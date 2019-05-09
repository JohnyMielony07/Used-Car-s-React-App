import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import axios from 'axios';
import styled from 'styled-components';
import { connect } from 'react-redux';

import CarCard from './CarCard/CarCard';
import Spinner from '../../../components/UI/Spinner/Spinner';

const Wrapper = styled.div`
  display:flex;
  justify-content: center;
`;

class CarList extends Component {
    state = {
        startedCarList: [],
        loading: true,
        filteringProperty: ['engine', 'cars', 'type', 'transmission', 'make', 'priceFrom', 'priceTo', 'mileageFrom', 'mileageTo']
    }

    componentDidMount() {

        axios.get("https://used-cars-react-app.firebaseio.com/car-s-list.json")
            .then(response => {
                //  console.log(response.data);
                this.setState({ startedCarList: response.data, loading: false });
                //  console.log(this.state);
            });
    }

    render() {
        var cars = null;

        if (this.state.loading === true) {
            cars = <Spinner />;
        } else {

            var carList = this.state.startedCarList;
            cars = [];
            let carsNumber = 0;

            for (const j of this.state.filteringProperty) {
                if (this.props.filter[j]) {
                    // j -typ filtra
                    // filter[j] - wartość filtra w globalnym state
                    carList = filter(carList, j, this.props.filter[j]);
                }
            }
        }

        for (const i in carList) {
            const car = carList[i];
            // carsNumber++;

            cars.push(
                <CarCard
                    id={car.id}
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

        return (
            <Auxiliary>
                Car's list here
                <Wrapper>
                    {cars}
                </Wrapper>
                <p>{this.props.counter}</p>
            </Auxiliary>
        )
    }
}

let filter = (array, filterType, filterValue) => {
    let newCarArray = [];
    switch (filterType) {
        case 'priceFrom':
            for (const i in array) {
                const car = array[i];
                // carsNumber++;
                if (car['price'] >= parseInt(filterValue)) {
                    newCarArray.push(car);
                }
            }
            return newCarArray;
        case 'priceTo':
            for (const i in array) {
                const car = array[i];
                // carsNumber++;
                if (car['price'] <= parseInt(filterValue)) {
                    newCarArray.push(car);
                }
            }
            return newCarArray;
        case 'mileageFrom':
            for (const i in array) {
                const car = array[i];
                // carsNumber++;
                if (car['mileage'] >= parseInt(filterValue)) {
                    newCarArray.push(car);
                }
            }
            return newCarArray;
        case 'mileageTo':
            for (const i in array) {
                const car = array[i];
                // carsNumber++;
                if (car['mileage'] <= parseInt(filterValue)) {
                    newCarArray.push(car);
                }
            }
            return newCarArray;
        default:
            for (const i in array) {
                const car = array[i];
                // carsNumber++;
                if (car[filterType] == filterValue) {
                    newCarArray.push(car);
                }
            }
            return newCarArray;
    }

}

const mapStateToProps = state => {
    return {
        counter: state.carsCounter,
        filter: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetCounter: (carsNumber) => dispatch({ type: 'SET', ctr: carsNumber })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarList);