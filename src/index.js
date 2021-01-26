import React from 'react';
import ReactDOM from 'react-dom';
import jhNImage from './images/git-profile.jpeg';

const userStyle = {
  height: '10px',
  width: '10px'
}

const user = (
  <div> 
    <img src={jhNImage} alt='Jhn Image'/>
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(user, rootElement);