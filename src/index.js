//component of react is a reusable piece of code of website
//app component, video component, etc.
//alert('hey');
import React from 'react'; //7.1K (gzipped: 3.1K)
import { render } from 'react-dom'; //93.4K (gzipped 29.8K)
// or import {Component} React from 'react'; 

import StorePicker from './Components/StorePicker';
import App from './Components/App';
import Router from './Components/Router';
//import "./css/style.css";


//render(<p>Helloooo</p>, document.querySelector('#main'));
//render(<StorePicker />, document.querySelector('#main'));
render(<Router />, document.querySelector('#main'));