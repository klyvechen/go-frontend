import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class SideBar extends React.Component {

    componentWillMount() {
        console.debug("SideBar will be Mounted ");
    }
    
    componentDidMount() {
        console.debug("SideBar is Mounted ");
        jQuery(document).ready(function(){
            initializeJS();
        });
     }
  
     contentUpdated() {
        console.debug('deal content update');

     }     
    render() {
        let sideBarItems;
        if (this.props.model) {
            sideBarItems = this.props.model.map((ele, index) =>
                <SideBarItem key={index} model={ele}>
                </SideBarItem>);
        }
        return (
            <aside ref={(el) => { this.myContent = el }}>
                <div id="sidebar" className="nav-collapse">
                    <ul className="sidebar-menu" style={{display: "none"}}>
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