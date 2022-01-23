import React, { useState } from 'react';

export default function Child({person}) {

    return (<div>
        <div>{person.name} is {person.age} old and their ID is {person.id}</div>
    </div>)
}  