import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SideBarItem extends React.Component {

    render() {
        let arrow;
        let children;

        if (this.props.hasChild) {
            arrow = <span className="menu-arrow arrow_carrot-right"></span>
            children = <ul className="sub">
                {this.props.children}
            </ul>
        }
        return (
            <li className={this.props.clsName}>
                <Link to={this.props.href}>
                    <i className={this.props.iconcls}></i>
                    <span>{this.props.value}</span>
                    {arrow}
                </Link>
                {children}
            </li>
        );
    }
}
export default SideBarItem;