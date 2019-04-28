import React, { Component } from 'react';

class ToDoList extends React.Component {
    render() {
        let title = this.props.content.head;
        let body = this.props.content.body;
        
        return (
            <div className="panel-body progress-panel">
                <div className="row">
                    <div className="col-lg-8 task-progress pull-left">
                        <h1>To Do Everyday</h1>
                    </div>
                    <div className="col-lg-4">
                        <span className="profile-ava pull-right">
                            <img alt="" className="simple" src="img/avatar1_small.jpg" />
                            Jenifer smith
                                    </span>
                    </div>
                </div>

                <table className="table table-hover personal-task">
                    <tbody>
                        {body.map((ele, index) => {
                            return <ToDoItem key={index} id={ele.id} time={ele.time} memo={ele.memo} type={ele.type} status={ele.status} img={ele.img} />
                        }
                        )}
                    </tbody>
                </table>
            </div>

        );
    }
}


class ToDoItem extends React.Component {
    render() {
        let img;
        let id;
        if (this.props.img) {
            img = <span className="profile-ava">
                <img alt="" className="simple" src={this.props.img} />
            </span>
        }
        if (this.props.id) {
            id = <div id={this.props.id}></div>;
        }
        return (
            <tr>
                <td>{this.props.time}</td>
                <td>
                    {this.props.memo}
                </td>
                <td>
                    <span className={"badge bg-" + this.props.status}>{this.props.type}</span>
                </td>
                <td>
                    {img}
                    {id}
                </td>
            </tr>
        );
    }
}
export default ToDoList;