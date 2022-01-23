import React from 'react';
import Parent1 from './Parent1';

export default class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

        //this.clickHandler = this.clickHandler.bind(this);
    }

    handleIncrement = () => {
        this.setState((prevState => {
          return {count: prevState.count + 1 }
        }))
    }

    render() {
        return (<div>
            <h1>Rendering</h1>
            <button onClick={this.handleIncrement}>Increment</button>
            <p>{this.state.count}</p>
            <Parent1 incrementCount={this.handleIncrement}/>
        </div>)
    }
}