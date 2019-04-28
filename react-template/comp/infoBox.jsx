
import React, { Component } from 'react';

class InfoBox extends React.Component {
    render() {
        return (
            <div className={"info-box " + this.props.bgcolor}>
                <i className={"fa " + this.props.iconcls}></i>
                <div className="count">{this.props.count}</div>
                <div className="title">{this.props.title}</div>
            </div>
        );
    }
}
export default InfoBox;
