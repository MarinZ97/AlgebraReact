import React from 'react';


export default class Korisnici extends React.Component {

    state= {
        niz: [1,2,3,4,5],
        tekst: "string"
    }
    


    render() {
            return <div>{this.state.tekst} {this.state.niz}</div>
    }
}