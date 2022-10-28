import React from 'react';
import { Link, Container } from 'ui';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <h1>Web</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Link className="App-link" href="https://reactjs.org">
            Learn React
          </Link>
        </Container>
      </header>
    </div>
  );
}

export default App;
