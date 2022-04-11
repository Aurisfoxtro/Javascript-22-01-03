import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as firebase from 'firebase';
import {AppProvider} from "./context/ExpensesContext"


ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


