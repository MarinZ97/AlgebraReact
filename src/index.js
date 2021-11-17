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
const [count, setCount]

useState(0) -> [0, func] 0 dolazi pd 0 iz useStatea
nula je count gore u constu, a func je zapravo setCount gore i ime funckije ujedno
najcesce se pise prvo ime pa iza njega set(to ime)
react using the state hook pogledat

Za input mora biti state jer inače neće raditi
this. stalno pišemo kada se nalazimo u klasi

.map uzima svaki iz liste i obavlja radnje (koristi se za liste), rezultat map-a je lista
5.10 vjezba je sa map, pogledat!!

kod funckijskog statea moramo sve odvajati da bi moglo raditi, dok kod class statea možemo imati spojeno sve unutra i da nema veze s vezom kao ime,prezime i onda naslov radit ce dobro

*/