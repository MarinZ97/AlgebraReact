import React, {useState} from 'react';
import User from './User';

export default function Vj512() {
    const [users, setUsers] = useState([{name: 'Nikola', age: 40},
                                        {name: 'Mate', age: 109},
                                        {name: 'Štef', age: 61}]);

    const handleRename = (newName, index) => {

        //NE users[0].name = newName;

        const newUsers = [...users];
        newUsers[index].name = newName; // kopirali listu i promjenili odredeno ime

        setUsers(newUsers);
    }


        return (
            <div>
            <h1>Input change</h1>
            <User usr={users[0]} onRename={(ime) => handleRename(ime, 0)} /> 
            <User usr={users[1]} onRename={(novoIme) => handleRename(novoIme, 1)} />
            <User usr={users[2]} onRename={(novoIme) => handleRename(novoIme, 2)} />



            </div>
            );
            // vrati usr iz child-a i vuci iz liste gore imena i godine
}
 /*
            <User usr={users[0]} onRename={(novoIme) => handleRename(novoIme, 0)} /> 
            <User usr={users[1]} onRename={(novoIme) => handleRename(novoIme, 1)} />
            <User usr={users[2]} onRename={(novoIme) => handleRename(novoIme, 2)} />
            Prebacivanje svih inputa

            //KEY mora biti na root elementu, na najvišem parentu

            map kada izvrši funkciju na prvo mjesto daje element, a na drugo indeks
            */
