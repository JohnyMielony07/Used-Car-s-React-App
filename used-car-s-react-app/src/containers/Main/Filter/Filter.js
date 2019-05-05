import React, { Component } from 'react';

import Input from '../../../components/UI/Input/Input';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Wrapper = styled.div`
  display:flex;
  justify-content: center;
  background-color: #D7D7D7;
`;


class filter extends Component {

    render() {
        return (
            <Wrapper>
                <Input
                    key="1"
                    elementType="select"
                    inputName="cars"
                    inputLabel="Cars"
                    options="Audi, BMW, Mercedes, Toyota"
                    inputValue={(event) => this.props.onChangeMake(event.target.value)}
                />
                <Input
                    key="2"
                    elementType="select"
                    inputName="type"
                    inputLabel="Type"
                    options="coupe, sedan, kombi, SUV, VAN, hatchback"
                    inputValue={(event) => this.props.onChangeType(event.target.value)}
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
                    inputValue={(event) => this.props.onChangeEngine(event.target.value)}
                />
                <Input
                    key="8"
                    elementType="select"
                    inputName="transmission"
                    inputLabel="Transmission"
                    options="automatic, manual"
                    inputValue={(event) => this.props.onChangeTransmission(event.target.value)}
                />
                <button onClick={this.props.onClear}>
                    Clear filtering
                </button>
            </Wrapper>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeEngine: (engine) => dispatch({ type: 'CHANGE_ENGINE', value: engine }),
        onChangeTransmission: (transmission) => dispatch({ type: 'CHANGE_TRANSMISSION', value: transmission }),
        onChangeMake: (make) => dispatch({ type: 'CHANGE_MAKE', value: make }),
        onChangeType: (type) => dispatch({ type: 'CHANGE_TYPE', value: type }),
        onClear: () => dispatch({ type: 'CLEAR_FILTERING'})
    };
};

export default connect(null, mapDispatchToProps)(filter);