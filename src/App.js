import React from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Movies from './modules/movies';

function App() {
  return (
    <div className="App">

        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Movie App Test</Navbar.Brand>
        </Navbar>

        <Movies/>

    </div>
  );
}

export default App;
