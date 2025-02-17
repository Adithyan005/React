import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './navbar/navbar.jsx';
import About from './about/about.jsx';
import Offers from './offers/offers.jsx';
import Contact from './contact/contact.jsx';


import './App.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <About/>
    <Offers/>
    <Contact/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
