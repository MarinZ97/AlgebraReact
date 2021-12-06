import React, {useState} from 'react';
import User1 from './User1';

export default function Function1() {
    const [data, setData] = useState([
                {ime:'Janko', godine:'22'},
                {ime:'Tina', godine:'37'}]);

    


    return (<div>
        <h1>Vjezbanje</h1>
        <User1 pod={data[0]}/>
        <button>Click me!</button>
    </div>)
}