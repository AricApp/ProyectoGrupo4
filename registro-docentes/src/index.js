import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom';
import 'firebaseui/dist/firebaseui.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import App from './App';

const firebaseConfig = {
  // configuración específica de proyecto en Firebase
  apiKey: "AIzaSyBIduxDG4SJDPQAZIDZr9VgUGvv24isVTY",
  authDomain: "correos-docentes.firebaseapp.com",
  projectId: "correos-docentes",
  storageBucket: "correos-docentes.appspot.com",
  messagingSenderId: "953436725575",
  appId: "1:953436725575:web:e6adefa0d39f0cd30f6c62"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// autenticación de Firebase en tu proyecto
const auth = firebase.auth();

export { auth };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
