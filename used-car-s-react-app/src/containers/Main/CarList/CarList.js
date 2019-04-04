import React, {Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import axios from 'axios';

class carList extends Component {
    state = {
        carList: []
    }

    componentDidMount() {
        axios.get("https://used-cars-react-app.firebaseio.com/car-s-list")
        .then(response => {
            this.setState({carList: response.data});
            console.log(response);
        });
    }

    render() {
        return (
            <Auxiliary>
                Car's list here
            </Auxiliary>
        )
    }
}

export default carList;