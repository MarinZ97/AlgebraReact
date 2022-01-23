import React from 'react';

export default function User({usr, onRename}) {

    const handleChange = (event) => {
        const novoIme = event.target.value;
        onRename(novoIme);
    }

    return (<div>
        <div>Ja sam {usr.name} i imam {usr.age} g.</div>
        <input value={usr.name} onChange={handleChange} disabled={!onRename} />
        </div>)
}

//onChange={(e) => onRename(e.target.value)} disabled kraci zapis func
// onRename se zove kada se u inputu trigera handleChange
