import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


/*
State hook i effect hook su najbitniji nama -> pogledat na react stranici
WillIMount se zove kada se sa komponente npr sa jedne "stranice" ode i onda se WillIMount pozove prije nego se otvori druga komponenta "stranica"
a update se zove ili effect update kada se dogodi neka promjena pa se refresha

*/