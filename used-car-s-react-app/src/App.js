import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './containers/Header/Header';
import Main from './containers/Main/Main';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <main>
            <Route path="/" exact component={Main} />
            {/* <Route path="/add-car" component={AddCar} /> */}

          </main>
          <footer>

          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
