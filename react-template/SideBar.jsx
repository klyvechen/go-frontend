import React, { Component } from 'react';


class SideBar extends React.Component {
    render() {
        return (
            <aside>
                <div id="sidebar" className="nav-collapse ">
                    <ul className="sidebar-menu">
                    {this.props.children}    
                    </ul>
                </div>
            </aside>
        );
    }
}
export default SideBar;