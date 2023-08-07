import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider from './contexts/ThemeContext'
import dotenv from 'dotenv';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
dotenv.config();


ReactDOM.render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>,
  document.getElementById('root')
);


reportWebVitals();
