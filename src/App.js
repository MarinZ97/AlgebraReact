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


React router !! -> bez njega ne može biti više html stranica

# (HashRouter) router je sigurnije koristit nego browser router, jer nakon # browser ništa ne čita i manje se šanse da se prikaže greška(404)

switch kada se koristi, on gleda prvu koja se poklapa u url bilo to "/", ili "/home/about" samo home uzme u drugom slucaju

<Redirect to=""> -> Directa na link koji zadamo mi i ignorira sve ostalo
Vjezba Router imamo

<NavLink> pogledat 

Mozemo pisati <Router> 
                  <Route exact path="/">
                    <HomePage /> -> mozemo ovako dodavati komponente, nemoramo component =
              </Router>
*/