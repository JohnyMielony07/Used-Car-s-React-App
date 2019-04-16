import React, {Component} from 'react';

import Input from '../../components/UI/Input/Input';
class AddCar extends Component {


    inputMakeHandler = (event) => {
        console.log("Make" + event.target.value);
    }

    inputModelHandler = (event) => {
        console.log("Model" + event.target.value);
    }

    inputPriceHandler = (event) => {
        console.log("Price" + event.target.value);
    }

    inputYearHandler = (event) => {
        console.log("Year" + event.target.value);
    }

    inputMileageHandler = (event) => {
        console.log("Mileage" + event.target.value);
    }

    inputTypeHandler = (event) => {
        console.log("Type" + event.target.value);
    }

    inputEngineHandler = (event) => {
        console.log("Engine" + event.target.value);
    }

    inputTypeHandler = (event) => {
        console.log("Type" + event.target.value);
    }

    inputPowerHandler = (event) => {
        console.log("Power" + event.target.value);
    }

    inputTransmissionHandler = (event) => {
        console.log("Transimission" + event.target.value);
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
            </div>
        )
    }
}

export default AddCar;