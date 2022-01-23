import React from 'react';

export default function Parent1({incrementCount}) {

    return(<div>
        <p onMouseOver={incrementCount}>Hovered X times</p>
    </div>)
}