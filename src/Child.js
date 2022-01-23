import React, { useState } from 'react';

export default function Child({onAlert}) {

    return (<div>
        
        <button onClick={() => onAlert("Child OOO DA")}>Greet parent</button>
    </div>)
}  