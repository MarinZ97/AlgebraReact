import React from 'react';

export default function Counter({totalCount, count3, last}) {
    return(
        <div>
            <div>Count: {totalCount}</div>
            <div>3 count: {count3}</div>
            <div>Last divisible: {last}</div>
        </div>
    )
}