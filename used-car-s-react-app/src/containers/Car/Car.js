import React, { Component } from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from 'axios';

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
            car = (<div>
                {this.state.car.engine}
            </div>)
        }


        return (
            <div>
                {car}
            </div>
        )
    }
}

export default Car;