import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Auxiliary from './hoc/Auxiliary/Auxiliary';
import './App.css';
import Header from './containers/Header/Header';
import Main from './containers/Main/Main';
import AddCar from './containers/AddCar/AddCar';
import Car from './containers/Car/Car';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        //background-color: grey;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
    `;

class App extends Component {
  render() {
    return (
      <Auxiliary>
        <GlobalStyle />
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <Header />
            </header>
            <main>
              <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/add-car" component={AddCar} />
                <Route path="/car/:id" component={Car} />
              </Switch>
            </main>
            <footer>

            </footer>
          </div>
        </BrowserRouter>
      </Auxiliary>
    );
  }
}

export default App;
