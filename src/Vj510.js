import React from 'react';
import User from './User';

export default class Vj510 extends React.Component {
    state = {
        users: [{name: 'Nikola', age: 40},
                {name: 'Mate', age: 109},
                {name: 'Štef', age: 61}]
    }

    handleDodajGodine = () => {
        const newUsers = [];
        for(let i = 0; i < this.state.users.length; i++) {
            const newUsr = {name: this.state.users[i].name, age: this.state.users[i].age + 1}
            // const newUsr = {...this.state.users[i], age: this.state.users[i].age + 1} --> ... nam rastavi i uzimamo samo kaj nam treba, u ovom slučaju godine
            newUsers.push(newUsr);
        }

        this.setState({ users: newUsers});
    }

    render() {
        const { users } = this.state;

        return (
            <div>
            <h1>Class</h1>
            <User usr={users[0]} /> 
            <User usr={users[1]} />
            <User usr={users[2]} />

            <button onClick={this.handleDodajGodine}>Dodaj godine</button>
            </div>
            );
            // vrati usr iz child-a i vuci iz liste gore imena i godine
    }
}