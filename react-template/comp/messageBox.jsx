import React, { Component } from 'react';

class MessageBox extends React.Component {
    render() {
        let content = this.props.content ? {} : this.props.content;
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <div className="pull-left">Message</div>
                    <div className="widget-icons pull-right">
                        <a href="#" className="wminimize"><i className="fa fa-chevron-up"></i></a>
                        <a href="#" className="wclose"><i className="fa fa-times"></i></a>
                    </div>
                    <div className="clearfix"></div>
                </div>

                <div className="panel-body">
                    {/* <!-- Widget content --> */}
                    <div className="padd sscroll">
                        <ul className="chats">
                            {this.props.content.map((ele, index) => {
                                return (<Message key={index} by={ele.by} meta={ele.meta} time={ele.time} img={ele.img}>
                                    {ele.content}
                                </Message>)
                            })}
                            {/* {[<Message by="me" meta="John Smith" img="img/user.jpg">
                                Vivamus diam elit diam, consectetur dapibus adipiscing elit.
                                </Message>, <Message by="me" meta="John Smith" img="img/user.jpg">
                                Vivamus diam elit diam, consectetur dapibus adipiscing elit.
                                </Message>]} */}
                            {this.props.children}
                        </ul>
                    </div>
                    {/* <!-- Widget footer --> */}
                    <div className="widget-foot">
                        <form className="form-inline">
                            <div className="form-group">
                                <input type="text" className="form-control"
                                    placeholder="Type your message here..." />
                            </div>
                            <button type="submit" className="btn btn-info">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

class Message extends React.Component {
    render() {
        let meta;
        let pullside;
        if (this.props.by == "me") {
            pullside = "pull-left"
            meta = <div className="chat-meta">{this.props.meta} <span className={pullside}>{this.props.time}</span></div>
        } else if (this.props.by == "other") {
            pullside = "pull-right"
            meta = <div className="chat-meta">{this.props.time} <span className={pullside}>{this.props.meta}</span></div>
        }

        return (
            /* <!-- Chat by us. Use the className "by-me". --> */
            <li className={'by-' + this.props.by}>
                {/* <!-- Use the className "pull-left" in avatar --> */}
                <div className={"avatar " + pullside}>
                    <img src={this.props.img} alt="" />
                </div>

                <div className="chat-content">
                    {/* <!-- In meta area, first include "name" and then "time" --> */}
                    {meta}
                    {this.props.children}
                    <div className="clearfix"></div>
                </div>
            </li>
        );
    }
};


export default MessageBox;