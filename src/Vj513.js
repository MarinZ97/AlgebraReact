import React, {useState} from 'react';
import User from './User';

export default function Vj513() {
    const [users, setUsers] = useState([{name: 'Nikola', age: 40},
                                        {name: 'Mate', age: 109},
                                        {name: 'Štef', age: 61}]);

    const handleRename = (newName, idx) => {

        //NE users[0].name = newName;

        const newUsers = [...users];
        newUsers[idx].name = newName; // kopirali listu i promjenili odredeno ime

        setUsers(newUsers);
    }


        return (
            <div>
            <h1>Key</h1>
            
            {users.map((user, index) => 
            <User key={index} usr={user} onRename={(ime) => handleRename(ime, index)} /> )}


            </div>);
}