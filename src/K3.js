import React from 'react';
import K1 from './K1';

export default class K3 extends React.Component {

    state = {
        title: 'brojač',
        count: 8,
    }

    klik = () => {
        const newCount = this.state.count + 1; // povecavamo count za 1
        this.setState({count: newCount}); 
        console.log(newCount) 
    }

    render() {
    return  <div>
                <div style={{color:"blue"}}>K3</div>
                <div>{this.state.title}: {this.state.count}</div> 
                <button onClick={this.klik}>+</button>
                <K1 parent={this.state.count.toString()} /> 
             </div>
    }
}