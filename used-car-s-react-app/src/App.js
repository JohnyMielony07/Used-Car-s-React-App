import React, { Component } from 'react';

import './App.css';
import Header from './containers/Header/Header';
import Main from './containers/Main/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main>
          <Main />
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
