import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    handleChange = (e) => {
        const newText = e.target.value;
        this.setState({text: newText});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const trimaniTekst = this.state.text.trim();
        if(trimaniTekst) {
            this.props.onNewTask(this.state.text);
            this.setState({text: ''});
        }
    }

    render() {
        return (<form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.text} onChange={this.handleChange} />
                    <input type='submit' value='Add'/>
                </form>);
    }
}

// definiramo propTypes, posto onNewTask ima props sto znaci da nam je to proptypes moramo ga definirati

Input.propTypes = {
    onNewTask: PropTypes.func
}

// Cisto da nam u consoli ispise dal sm onesto zaboravili, radi itd proptypes sluzi