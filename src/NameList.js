import React, { useState } from 'react';
import Person from './Person'

export default function Child({onAlert}) {

    const names = ["aaaa","bbb","cccc"]
    const listNames = names.map((person, idx) => <ul key={idx}><li>{person}</li></ul>)
    return (<div>
        {listNames}
    </div>)
}  