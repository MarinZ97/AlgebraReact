import React from 'react';
import K1 from './K1';
import K2 from './K2';
import Korisnici from './Vjezba';

function App() {
  return (
    <div>
      <h1>React</h1>
      <K1 parent="App"/>
      <K2 roditelj="App"/>
      <Korisnici />
    </div>
  );
}

export default App;

// K1 i K2 imaju atribute koje prosljeđujemo dalje u komponente sa {parent} itd
// U clasi se inace pise this. nesto uvijek, ali se moze raditi dekompozicija sa npr. const {parent} = this.props da nemoramo pisati this.props
// state moze mjenjat odredene stvari bez da brise druge, i mjenja sa this.setState({objekt/niz})
// Poslije setState je najbolje ne imati nista, gledat ga kao return, jer mu nije za vjerovat jer se nekad mjenja,a nekad mu duze treba pa nemozemo vidjeti jel dobro odradeno
//poslije set state ugl je najbolje da nema niceg

