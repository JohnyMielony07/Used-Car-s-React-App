import React, { Component } from 'react';

import Input from '../../../components/UI/Input/Input';

class filter extends Component {
    render() {
        return (
            <div>
                <Input
                    key="1"
                    elementType="select"
                    inputName="cars"
                    inputLabel="Cars"
                    options="Audi, BMW, Mercedes, Toyota"
                />
                <Input
                    key="2"
                    elementType="select"
                    inputName="type"
                    inputLabel="Type"
                    options="coupe, sedan, kombi, SUV, VAN"
                />
                <Input
                    key="3"
                    elementType="number"
                    inputName="price from"
                    inputLabel="Price range"
                />
                <Input
                    key="4"
                    elementType="number"
                    inputName="price to"
                    inputLabel="-"
                />
                <Input
                    key="5"
                    elementType="number"
                    inputName="price from"
                    inputLabel="Mileage range"
                />
                <Input
                    key="6"
                    elementType="number"
                    inputName="price to"
                    inputLabel="-"
                />
                <Input
                    key="7"
                    elementType="select"
                    inputName="engine"
                    inputLabel="Engine"
                    options="Petrol, Diesel, Hybrid, EV"
                />
                <Input
                    key="8"
                    elementType="select"
                    inputName="transmission"
                    inputLabel="Transmission"
                    options="Automatic, Manual"
                />
            </div>
        )
    }
}

export default filter;