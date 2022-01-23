import React, {useState} from 'react';
import User1 from './User1';

export default function Function1() {
    const [data, setData] = useState([
                {ime:'Janko', godine: 22},
                {ime:'Tina', godine: 37}]);

   
     const changeName = () => {
        const newName = [];
        for(let i = 0; i < data.length; i++) {
        const listName = {ime: data[i].ime, godine: data[i].godine + 1};
        newName.push(listName);
        }
        setData(newName);
    }

    return (<div>
        <h1>Vjezbanje</h1>

        <User1 pod={data[0]} />
        <User1 pod={data[1]} />

        <button onClick={changeName}>Click me!</button>
    </div>);
}