import React, {useState} from 'react';
import User from './User';

export default function Vj511() {
    const [users, setUsers] = useState([{name: 'Nikola', age: 40},
                                        {name: 'Mate', age: 109},
                                        {name: 'Štef', age: 61}]);
    const [string, setString] = useState("Bok") // ako želimo doddati još nešto, moramo raditi novi state

    const handleDodajGodine = () => {
        const newUsers = [];
        for(let i = 0; i < users.length; i++) {
            const newUsr = {name: users[i].name, age: users[i].age + 1}
            // const newUsr = {...this.state.users[i], age: this.state.users[i].age + 1} --> ... nam rastavi i uzimamo samo kaj nam treba, u ovom slučaju godine
            newUsers.push(newUsr);
        }

        setUsers(newUsers); // dajemo mu newUsers sta smo dobili iz toga
    }


        return (
            <div>
            <h1>Function</h1>
            <User usr={users[0]} /> 
            <User usr={users[1]} />
            <User usr={users[2]} />

            <button onClick={handleDodajGodine}>Dodaj godine</button>
            </div>
            );
            // vrati usr iz child-a i vuci iz liste gore imena i godine
}