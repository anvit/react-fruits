import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { v4 as uuid } from 'uuid';
import FruitList from './FruitList';

const fruits = [
    { key: uuid(), emoji:"🍒", qty:5 },
    { key: uuid(), emoji:"🍌", qty:8 },
    { key: uuid(), emoji:"🥥", qty:3 },
    { key: uuid(), emoji:"🍊", qty:9 },
    { key: uuid(), emoji:"🍐", qty:7 },
    { key: uuid(), emoji:"🍑", qty:4 }
];

const headingTitle = "Props Demo";
// Use className for a css classes
const container = (
    <div className="App">
        <header className="App-header"> {headingTitle} </header>
        <main>
            <FruitList fruits={fruits} />
        </main>
    </div>)
ReactDOM.render(container, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
