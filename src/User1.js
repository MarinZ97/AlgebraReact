import React from 'react';

export default function User1({pod, onRename}) {

    const handleChange = (event) => {
        const novoIme = event.target.value;
        onRename(novoIme);
    }

    return (<div>
        <div>Ja sam {pod.ime} i imam {pod.godine} godine</div>
        <input value={pod.name} onChange={handleChange} disabled={!onRename} />
        
    </div>)
}