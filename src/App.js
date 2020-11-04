import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LikeButton from './pages/LikeButton';
import Container from './pages/Container';
import History from './pages/History';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import ComputedPropNames from './pages/ComputedPropNames';
import TodoList from './pages/TodoList';
import ContextAPI from './pages/ContextAPI';

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
            <Link to='/todolist'>할 일</Link>
            <br/>
            <Link to='/contextapi'>context api</Link>
            <br/>
            <Link to='/computedpropnames'>계산된 속성명</Link>
            <Route path='/likeButton' component={LikeButton}></Route>
            <Route path='/container' component={Container}></Route>
            <Route path="/history" component={History}></Route>
            <Route path='/computedpropnames' component={ComputedPropNames}></Route>
            <Route path='/todolist' component={TodoList}></Route>
            <Route path='/contextapi' component={ContextAPI}></Route>
          </BodyWrapper>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
