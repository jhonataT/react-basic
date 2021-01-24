import React from 'react';
import ReactDOM from 'react-dom';

// JSX element header:
const header = (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
  </header>
);
// JSX element main:
const main = (
  <main>
    <p>Prequesite to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
);
// JSX element footer:
const footer = (
  <footer>
    <p>Copyright 2021</p>
  </footer>
);
// JSX element, app, a container or a parent:
const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById('root');

ReactDOM.render(app, rootElement);