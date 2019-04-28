
import React, { Component } from 'react';

class PageHeader extends React.Component {
    render() {
        return (
            <div>
                <h3 className="page-header"><i className="fa fa-laptop"></i> Dashboard</h3>
                <ol className="breadcrumb">
                    <li><i className="fa fa-home"></i><a href="index.html">Home</a></li>
                    <li><i className="fa fa-laptop"></i>Dashboard</li>
                    <li><i className="fa fa-laptop"></i>Dashboard</li>
                </ol>
            </div>
        );
    }
}
export default PageHeader;
