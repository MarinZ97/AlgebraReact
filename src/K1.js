import React from 'react';
import PropTypes from 'prop-types';

export default class K1 extends React.Component {
    render() {
        const {parent} = this.props
        return ( <div> K1 parent mi je: {parent}</div> )
    }
}
 
