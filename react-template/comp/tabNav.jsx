import React, { Component } from 'react';

class TabNav extends React.Component {
    render() {
        console.log("TabNav");
        let names = [];
        let children = this.props.children;
        children.map((child, key) => {
            names.push(child.props.name);
        });
        let titleElements = names.map((name, idx) =>
            <li className={(idx == 0) ? "active" : ""} key={idx}>
                <a data-toggle="tab" href={'#' + name}>{name}</a>
            </li>
        )
        let contentElements = children.map((child, idx) =>
            <div key={idx} id={child.props.name} className={"tab-pane " + ((idx == 0) ? "active" : "")}>
                {child.props.children}
            </div>
        )

        return (
            <section className="panel">
                <header className="panel-heading tab-bg-primary">
                    <ul className="nav nav-tabs">
                        {titleElements}
                    </ul>
                </header>
                <div className="panel-body">
                    <div className="tab-content">
                        {contentElements}
                    </div>
                </div>
            </section>
        );
    }
}


export default TabNav;
