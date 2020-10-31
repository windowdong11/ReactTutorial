import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LikeButton from './pages/LikeButton';
import Container from './pages/Container';

function App() {
  console.log(process.env)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <LikeButton></LikeButton>
        <Container></Container>
      서버 : {process.env.REACT_APP_SERVER}
      </header>
    </div>
  );
}

export default App;
