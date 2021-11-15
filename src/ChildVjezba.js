import React from 'react' 


export default function Child({children}) {
    return <div>
    <h2>Child</h2>
    <p>{children}</p>
    </div>
}