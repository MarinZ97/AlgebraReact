import React from 'react';
import Vj2311 from './Vj2311';


function App() {
  return (
    <div>
        <h1>Test</h1>
        <Vj2311 />

    </div>
  );
}

export default App;

/*
componentWillMount se više ne koristi!
react lifecycle diagram -> pogledat i zapamtit dijagram
*/

/*
const varijabla = kopiaUser.map(x=>{  kao "i" kod for petlje x predstavlja value koji se dodaje
{...x, godine:x.godine + 1}})

const korisnik = {ime: users.ime, godine.users.godine}
const noviKorisnici = {...users, korisnik} 
setUsers(noviKorisnici)

je isto kao i 
const noviKorisnici = {...users}
noviKorisnici.push(korisnik)

!!!!!!!!!!
dodavanje boostrapa u react
boostrop-react pa vidjeti!!
*/