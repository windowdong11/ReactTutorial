import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

class LikeButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false
    }
  }
  render() {
    const text = this.state.liked ? "싫어요" : "좋아요"
    const props = {
      onClick: () => this.setState({ liked: !this.state.liked }),
      style: {
        backgroundColor: this.state.liked ? "gray" : "red"
      }
    }
    return React.createElement(
      'button',
      props,
      text
  )
  }
}

function LikeButtonFunc() {
  const [liked, setLiked] = useState(false)
  const text = liked? "싫어요" : "좋아요"
  const props = {
    onClick: () => setLiked(!liked),
    style: {
      backgroundColor: liked ? "gray" : "red"
    }
  }
  return React.createElement(
    'button',
    props,
    text
  )
}

function Container() {
  const [count, setCount] = useState(0)
  return(
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
    </div>
  )
}

function App() {
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
        <LikeButtonFunc></LikeButtonFunc>
        <Container></Container>
      </header>
    </div>
  );
}

export default App;
