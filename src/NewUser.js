import React from 'react';
import User from './User';
import App from './App';

export default function({name, age}) {



    return(<div>
        <p></p>
        <form>
            <label>Novi korisnik:
                <input placeholder="Ime" type="text" value={name} />
                <input placeholder="Godine" type="text" value={age}/>
                <button type="submit" >Prihvati</button>
            </label>
        </form>
    </div>)
}