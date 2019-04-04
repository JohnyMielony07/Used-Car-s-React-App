import React, {Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import axios from 'axios';

import CarCard from './CarCard/CarCard';

class carList extends Component {
    state = {
        carList: []
    }

    componentDidMount() {
        

        axios.get("https://used-cars-react-app.firebaseio.com/car-s-list.json")
        .then(response => {
            this.setState({carList: response.data});
            console.log(this.state);
        });
    }

    render() {
        return (
            <Auxiliary>
                Car's list here
                {this.state.carList.map(car => {
                    if(car) {
                        return (
                            <CarCard 
                            key={car.id}
                            make={car.make}
                            model={car.model}/>
                        )
                    }
                }
                    
                    
                )

                }
            </Auxiliary>
        )
    }
}

export default carList;