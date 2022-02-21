import './App.css';
import React from 'react';
import Dictionary from './Dictionary'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';

function App() {
  return (
    <div className="container">
      <div className="App">
        <header>
          <img src={logo} alt="Logo" className="logo" />
        </header>
        <Dictionary defaultKeyword="hi"/>
        <footer>
          <a 
            href="https://github.com/elizabeth-oh/dictionary-app" 
            target="_blank" 
            rel="noopener noreferrer"
          > Coded
          </a> by Elizabeth Oh
        </footer>
      </div>
    </div>
  );
}

export default App;
