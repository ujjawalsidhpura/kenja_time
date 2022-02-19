import React from 'react';
import ReactDOM from 'react-dom';
import "@material-tailwind/react/tailwind.css";
import './input.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'flowbite';


ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


