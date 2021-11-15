import React from 'react' 


export default function Child({children, name, age}) {
    return <div>
    <h2>Child</h2>
    <p>Ime: {name}</p>
    <p>Godine: {age}</p>
    <p>{children}</p>
    </div>
}