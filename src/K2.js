import React from 'react';
import K1 from './K1';
import K3 from './K3';


export default function K2({roditelj}) {
    return (<div style= {{color: "gray"}}>
            K2 - moj je roditelj: {roditelj}
            <div>
         <K3 />
         <K1 />
         </div>
    </div> )
}
