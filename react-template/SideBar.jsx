import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class SideBar extends React.Component {
    render() {
        let sideBarItems = this.props.model;
        return (
            <aside>
                <div id="sidebar" className="nav-collapse ">
                    <ul className="sidebar-menu">
                        {sideBarItems.map((ele, index) =>
                            <SideBarItem key={index} model={ele}>
                            </SideBarItem>)}
                        {this.props.children}
                    </ul>
                </div>
            </aside>
        );
    }
}

class SideBarItem extends React.Component {
    render() {
        let arrow;
        let children;
        let ele = this.props.model;
        if (ele.children.length > 0) {
            arrow = <span className="menu-arrow arrow_carrot-right"></span>
            children = <ul className="sub">
                {ele.children.map((ele, index) => 
                    <SideBarItem key={index} model={ele}/>
                )}
            </ul>
        }
        return (
            <li className={ele.type}>
                <Link to={ele.href}>
                    <i className={ele.icon}></i>
                    <span>{ele.name}</span>
                    {arrow}
                </Link>
                {children}
            </li>
        );
    }
}
export default SideBar;