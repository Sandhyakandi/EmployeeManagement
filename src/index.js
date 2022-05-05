import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
 
  <BrowserRouter>
    <App />
  </BrowserRouter>
 
);


/*

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  
  document.getElementById('root')
);

reportWebVitals();
*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



/*





  <React.StrictMode>
    <App />
  </React.StrictMode>,

  */