import React from 'react';
import reactDom from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';


const jsxElement = <h1>FlashCards</h1>;
console.log(jsxElement);

reactDom.render(<App />, document.getElementById('root'));