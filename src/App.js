import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LikeButton from './pages/LikeButton';
import Container from './pages/Container';
import History from './pages/History';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import styled from 'styled-components';

const BodyWrapper = styled.div`
  padding: 20;
  border: 5px solid gray;
`

function App() {
  console.log(process.env)
  return (
    <div className="App">
      <header className="App-header">
      서버 : {process.env.REACT_APP_SERVER}
        <BrowserRouter>
          <BodyWrapper>
            <Link to='/likeButton'>좋아요 버튼</Link>
            <br/>
            <Link to='/container'>컨테이너</Link>
            <br/>
            <Link to='/history'>히스토리</Link>
            <br/>
            <Route path='/likeButton' component={LikeButton}></Route>
            <Route path='/container' component={Container}></Route>
            <Route path="/history" component={History}></Route>
          </BodyWrapper>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
