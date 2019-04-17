import React, { Component } from 'react';
import axios from 'axios';

import Input from '../../components/UI/Input/Input';
class AddCar extends Component {

    state = {
        make: null,
        model: null,
        price: null,
        year: null,
        mileage: null,
        type: "coupe",
        engine: "Petrol",
        power: null,
        transmission: "automatic",
        main_image: null
    }


    inputMakeHandler = (event) => {
        this.setState({ make: event.target.value });
        console.log(this.state);
    }

    inputModelHandler = (event) => {
        this.setState({ model: event.target.value });
        console.log(this.state);
    }

    inputPriceHandler = (event) => {
        this.setState({ price: event.target.value });
        console.log(this.state);
    }

    inputYearHandler = (event) => {
        this.setState({ year: event.target.value });
    }

    inputMileageHandler = (event) => {
        this.setState({ mileage: event.target.value });
    }

    inputTypeHandler = (event) => {
        this.setState({ type: event.target.value });
    }

    inputEngineHandler = (event) => {
        this.setState({ engine: event.target.value });
    }

    inputPowerHandler = (event) => {
        this.setState({ power: event.target.value });
    }

    inputTransmissionHandler = (event) => {
        this.setState({ transmission: event.target.value });
    }

    showAddedCar = () => {

        axios.post('https://used-cars-react-app.firebaseio.com/car-s-list.json', this.state)
            .then(response => {
                console.log(response);
            });

    }

    render() {
        return (
            <div>
                Add new car here
                <Input
                    key="1"
                    elementType="text"
                    inputName="make"
                    inputLabel="Make"
                    inputValue={this.inputMakeHandler}
                />
                <Input
                    key="2"
                    elementType="text"
                    inputName="model"
                    inputLabel="Model"
                    inputValue={this.inputModelHandler}
                />
                <Input
                    key="3"
                    elementType="number"
                    inputName="price"
                    inputLabel="Price"
                    inputValue={this.inputPriceHandler}
                />
                <Input
                    key="4"
                    elementType="number"
                    inputName="year"
                    inputLabel="Year of production"
                    inputValue={this.inputYearHandler}
                />
                <Input
                    key="5"
                    elementType="number"
                    inputName="mileage"
                    inputLabel="Mileage"
                    inputValue={this.inputMileageHandler}
                />
                <Input
                    key="6"
                    elementType="selectSingle"
                    inputName="type"
                    inputLabel="Type"
                    options="coupe, sedan, kombi, SUV, VAN"
                    inputValue={this.inputTypeHandler}
                />
                <Input
                    key="7"
                    elementType="selectSingle"
                    inputName="engine"
                    inputLabel="Engine"
                    options="Petrol, Diesel, Hybrid, EV"
                    inputValue={this.inputEngineHandler}
                />
                <Input
                    key="8"
                    elementType="number"
                    inputName="power"
                    inputLabel="Hourse Power"
                    inputValue={this.inputPowerHandler}
                />
                <Input
                    key="9"
                    elementType="selectSingle"
                    inputName="transmission"
                    inputLabel="Transmission"
                    options="Automatic, Manual"
                    inputValue={this.inputTransmissionHandler}
                />
                <button onClick={this.showAddedCar} >Dodaj</button>
            </div>
        )
    }
}

export default AddCar;