import userEvent from '@testing-library/user-event';
import React from 'react';

export default function({name, onRename}) { 
    return(<div>
        <p>Pozdrav, moje ime je {name} i imam {age} godina.</p>
        <input type="text" value={user.name} onChange={(e) => onRename(e.target.value)} />
    </div>)
}