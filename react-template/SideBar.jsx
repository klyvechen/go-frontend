import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class SideBar extends React.Component {

    componentDidMount() {
        console.log('sidebarId is', $('#sidebarId')[0]);
        console.log('container is', $('#container')[0]);
        jquery18().then(eval(scriptMap.jquery18));
        bootstrapScript().then(eval(scriptMap.bootstrap));
     }

    render() {
        let sideBarItems;
        if (this.props.model) {
            sideBarItems = this.props.model.map((ele, index) =>
                <SideBarItem key={index} model={ele}>
                </SideBarItem>);
        }
        return (
            <aside>
                <div id="sidebar" className="nav-collapse ">
                    <ul className="sidebar-menu">
                        {sideBarItems}
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
        let model = this.props.model;
        let sideBarItems;
        if (model.children && model.children.length > 0) {
            sideBarItems = model.children.map((ele, index) =>
                <SideBarItem key={index} model={ele}>
                </SideBarItem>);
            arrow = <span className="menu-arrow arrow_carrot-right"></span>
            children = <ul className="sub">
                {sideBarItems}
            </ul>
        }

        return (
            <li className={model.type}>
                <Link to={model.href}>
                    <i className={model.icon}></i>
                    <span>{model.name}</span>
                    {arrow}
                </Link>
                {children}
            </li>
        );
    }
}
export default SideBar;