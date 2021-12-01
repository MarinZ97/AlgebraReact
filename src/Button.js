import React from 'react';

// onBtnClick smo nazvali custom event btn
export default class Button extends React.Component {

    handleButtonClick = () => {
        this.props.onBtnClick();
    }

    render() {
        return (<div>
            <button onClick={this.handleButtonClick}>Add</button>
            <div></div>
        </div>)
    }
}