import React from 'react';
import ReactDOM from 'react-dom';

// JSX element header:
const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
}
const header = (
  <header style={headerStyles}>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
  </header>
);

// JSX element main:
const mainStyle = {
  backgroundColor: '#F3F0f5',
}
const main = (
  <main style={mainStyle}>
    <p>Prequesite to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
);

// JSX element footer:
const footerStyle = {
  backgroundColor: '#61DBFB',
}
const footer = (
  <footer style={footerStyle}>
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