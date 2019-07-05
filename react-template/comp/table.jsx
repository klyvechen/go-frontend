import React, { Component } from 'react';

class Table extends React.Component {

    render() {
        let header = "Border Table";
        let thead = [];
        let tbody = [];
        if (this.props.model) {
            thead = this.props.model.thead;
            tbody = this.props.model.tbody;
        }

        return (
            <section className="panel">
                <header className="panel-heading no-border">
                    {header}
                </header>
                <table className="table table-bordered">
                    <THead data={thead} />
                    <TBody data={tbody} />
                </table>
            </section>
        );
    }
}
export default Table;

class THead extends React.Component {

    render() {
        let thTags;
        if (this.props.data && this.props.data.th) {
            thTags = this.props.data.th.map((ele, index) =>
                <th key={index}>{ele}</th>);
        }
        return (
            <thead>
                <tr>
                    {thTags}
                    <th>Edit</th>
                </tr>
            </thead>
        );
    }
}

class TBody extends React.Component {
    constructor(props) {
        super(props);
        this.trTags = null
        this._isMounted = false; // It is need for mounted
    }
    render() {
        if (this.props.data && this.props.data.tr) {
            this.trTags = this.props.data.tr.map((ele, index) => <Tr key={index} data={ele} />);
        }
        return (
            <tbody>
                {this.trTags}
            </tbody>
        );
    }
}

class Tr extends React.Component {
    constructor(props) {
        super(props)
        this.state = {editable : false, tds: null}
        this.toggleRows = this.toggleRows.bind(this);
        this._isMounted = false; // It is need for mounted
    }
    onTodoChange(val, idx) {
        let tds = this.state.tds;
        tds[idx] = val;
        this.setState({tds: tds});
    }

    toggleRows(ev) {
        console.log('this is:', this, ev, ev.target);
        this.setState({editable: !this.state.editable})
    }

    render() {
        let tdTags;
        if (this.props.data && this.props.data.td) {
            let size = this.props.data.td.length;
            let width = (100.0/(size + 1.0)) + '%';
            this.state.tds = this.props.data.td;
            tdTags = this.state.tds.map((tdEle, idx) =>
                <td width={width} key={idx}>
                    {this.state && this.state.editable && 
                        <input type="text" className="form-control" onChange={e => this.onTodoChange(e.target.value, idx)}
                        defaultValue={this.state.tds[idx]} />
                    }
                    {this.state && !this.state.editable && this.state.tds[idx]}
                </td>
            );
        }
        return (
            <tr>
                {tdTags}
                <td>
                    <div className="btn-group">
                        <a className="btn btn-default" href="javascript:" onClick={(e) => this.toggleRows(e)} title="">
                        {this.state && !this.state.editable && 'edit'}
                        {this.state && this.state.editable && 'OK'}
                        </a>
                    </div>
                </td>
            </tr>
        );
    }
}


class TBottom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {editable : false, tds: null}
        this.toggleRows = this.toggleRows.bind(this);
        this._isMounted = false; // It is need for mounted
    }
    onTodoChange(val, idx) {
        let tds = this.state.tds;
        tds[idx] = val;
        this.setState({tds: tds});
    }

    toggleRows(ev) {
        console.log('this is:', this, ev, ev.target);
        this.setState({editable: !this.state.editable})
    }

    render() {
        let tdTags;
        if (this.props.data && this.props.data.td) {
            let size = this.props.data.td.length;
            let width = (100.0/(size + 1.0)) + '%';
            this.state.tds = this.props.data.td;
            tdTags = this.state.tds.map((tdEle, idx) =>
                <td width={width} key={idx}>
                    {this.state && this.state.editable && 
                        <input type="text" className="form-control" onChange={e => this.onTodoChange(e.target.value, idx)}
                        defaultValue={this.state.tds[idx]} />
                    }
                    {this.state && !this.state.editable && this.state.tds[idx]}
                </td>
            );
        }
        return (
            <tr>
                {tdTags}
                <td>
                    <div className="btn-group">
                        <a className="btn btn-default" href="javascript:" onClick={(e) => this.toggleRows(e)} title="">
                        {this.state && !this.state.editable && 'edit'}
                        {this.state && this.state.editable && 'OK'}
                        </a>
                    </div>
                </td>
            </tr>
        );
    }
}

