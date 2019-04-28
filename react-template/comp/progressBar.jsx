import React, { Component } from 'react';

class ProgressBar extends React.Component {
    render() {
        let val = this.props.value.toString();
        let remain =(100 - parseInt(val)).toString();
        return (
            <div className="progress thin">
                <div className="progress-bar progress-bar-danger" role="progressbar"
                    aria-valuenow={val.toString()} aria-valuemin="0" aria-valuemax="100"
                    style={{ width: val + '%' }}>
                </div>
                <div className="progress-bar progress-bar-warning" role="progressbar"
                    aria-valuenow={remain} aria-valuemin="0" aria-valuemax="100"
                    style={{ width: remain + '%' }}>
                </div>
            </div>
        );
    }
}
export default ProgressBar;
