import React, { Component } from 'react';

import Filter from './Filter/Filter';
import CarList from './CarList/CarList';

class main extends Component {
    render() {
        return (
            <div>
                <Filter />
                <CarList />
            </div>
        )
    }
}

export default main;