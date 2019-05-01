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
        main_image: null,
        images: [],
        id: null
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


    componentDidMount() {
        let uniq = revisedRandId();
        console.log('added car id: ' + uniq);
        this.setState({ id: uniq });
    }



    inputFileHandler = (event) => {
      //  console.log(event.target.files[0]);
        var fileToLoad = event.target.files[0];
        var fileReader = new FileReader();
        fileReader.readAsDataURL(fileToLoad);
        fileReader.onload = (fileLoadedEvent) => {
            var base64value = fileLoadedEvent.target.result;
            if(!this.state.main_image) {
                this.setState({ main_image: base64value });
            }
            this.setState(state => {
                const images = state.images.concat(base64value);

                return {
                    ...state,
                    images
                }
            })
            // stateImages.push(base64value);
            // this.setState({ images: stateImages});
        }
    }



    showAddedCar = () => {

        var id = this.state.id;

        axios.post('https://used-cars-react-app.firebaseio.com/car-s-list.json', this.state)
            .then(response => {
                console.log(response);
            });

        let specialCar = {
               Make: this.state.make,
               Model: this.state.model,
               Images: this.state.images
           
        }

        axios.put('https://used-cars-react-app.firebaseio.com/Cars/' + id + '.json', specialCar)
            .then(response => {
                console.log(response);
            });


    }

    render() {

        console.log(this.state);

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
                <input
                    type="file"
                    style={{ display: 'none' }}
                    onChange={this.inputFileHandler}
                    ref={fileInput => this.fileInput = fileInput} />
                <button onClick={() => this.fileInput.click()} >Pick file</button>
                <button onClick={this.showAddedCar} >Add car</button>
            </div>
        )
    }
}

var revisedRandId = () => {
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var uniqid = randLetter + Date.now();
    return uniqid;
}

export default AddCar;