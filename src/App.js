import React, {useState} from 'react';
import Vj2311 from './Vj2311';
import Vj514 from './Vj514';
import Users from './Users';
import User from './User';
import NewUser from './NewUser'



function App() {
  const [usr, setUsr] = useState()
  const [name, setName] = useState({ime: 'Marko'});
  const [age, setAge] = useState('');

  const changeText = (e) => {
    e.preventDefault();
    const newText = e.target.value;

      setName(newText);
  }

  const changeAge = (e) => {
    e.preventDefault();
    const newAge = e.target.value;

    setAge(newAge);
  }

  return (
    <div>
        <h1>Test</h1>
        <Vj2311 />
        <Vj514 />
        <hr></hr>
        <h1>React aplikacija</h1>
        <p>Ovo zbilja radi</p>
        <button>Promjena godina</button>
        <Users />
        <User name={name.ime}/>
        <NewUser />
    </div>
  );
}

export default App;

/*
componentWillMount se više ne koristi!
react lifecycle diagram -> pogledat i zapamtit dijagram
*/

// NIJE ZAVRSENO