import React, {Component} from 'react';

import Input from '../../components/UI/Input/Input';
class AddCar extends Component {
    render() {
        return (
            <div>
                Add new car here
                <Input
                    key="1"
                    elementType="text"
                    inputName="make"
                    inputLabel="Make"
                />
                <Input
                    key="2"
                    elementType="text"
                    inputName="model"
                    inputLabel="Model"
                />
                <Input
                    key="3"
                    elementType="number"
                    inputName="price"
                    inputLabel="Price"
                />
                <Input
                    key="4"
                    elementType="number"
                    inputName="year"
                    inputLabel="Year of production"
                />
                <Input
                    key="5"
                    elementType="number"
                    inputName="mileage"
                    inputLabel="Mileage"
                />
                <Input
                    key="6"
                    elementType="selectSingle"
                    inputName="type"
                    inputLabel="Type"
                    options="coupe, sedan, kombi, SUV, VAN"
                />
                <Input
                    key="7"
                    elementType="selectSingle"
                    inputName="engine"
                    inputLabel="Engine"
                    options="Petrol, Diesel, Hybrid, EV"
                />
                <Input
                    key="8"
                    elementType="number"
                    inputName="power"
                    inputLabel="Hourse Power"
                />
                <Input
                    key="9"
                    elementType="selectSingle"
                    inputName="transmission"
                    inputLabel="Transmission"
                    options="Automatic, Manual"
                />
            </div>
        )
    }
}

export default AddCar;