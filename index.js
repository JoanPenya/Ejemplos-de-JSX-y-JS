import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Javi from './Javi';
import reportWebVitals from './reportWebVitals';

/**
function Prueba(user){
  return user.firstname + ' ' + user.lastname;
}

const user = {
  firstname: "Joan",
  lastname: "Peña"
}

const element = (
  <h1>
    hello, {Prueba(user)} :D
  </h1>
)

ReactDOM.render(
  element,
  document.getElementById('root')
)
 */
 
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Javi />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
