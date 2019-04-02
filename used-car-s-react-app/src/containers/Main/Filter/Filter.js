import React, { Component } from 'react';

import Input from '../../../components/UI/Input/Input';

class filter extends Component {
    render() {
        return (
            <div>
                <Input
                    key="1"
                    elementType="select"
                    options="Audi, BMW, Mercedes, Toyota"
                    label="ADSD"
                />
                <Input
                    key="2"
                    elementType="text"
                    label="ADSD"
                />
            </div>
        )
    }
}

export default filter;