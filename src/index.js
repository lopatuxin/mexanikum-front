import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let messages = [
    {id : 1, name : 'Антон Лопатухин', message : 'Привет'},
    {id : 2, name : 'Владимир Лопатухин', message : 'Привет, как дела'},
    {id : 3, name : 'Елена Лопатухина', message : 'Пока'},
    {id : 4, name : 'Леля Лопатухина', message : 'Привет'},
    {id : 5, name : 'Антон Лопатухин', message : 'Привет'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
