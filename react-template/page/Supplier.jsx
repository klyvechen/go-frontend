import React, { Component } from 'react';

class Supplier extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
           TABLE_MODEL: null,
        };
        this._isMounted = false; // It is need for mounted
     }
    render() {
        return (
            <div><span>Supplier</span></div>
        );
    }
}
export default Supplier;
