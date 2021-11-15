import React from 'react';
import Child from './ChildVjezba'

export default class Vjezba extends React.Component {

    state= {
        korisnici: [{name: "Ana", age: 55}, 
                    {name: "Mislav", age: 43},
                   {name: "Porin", age:21}],
        naslov: "Naslov je tu"
    }
    
    render() {
            return( <div>
                <h2>{this.state.naslov}</h2>
                Korisnici: {this.state.korisnici[0].name}
                <Child name={this.state.korisnici[0].name} age={this.state.korisnici[0].age}/>
            </div>)
    }
}