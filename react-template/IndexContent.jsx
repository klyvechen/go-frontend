
import React, { Component } from 'react';
import PageHeader from './comp/pageHeader.jsx';
import InfoBox from './comp/infoBox.jsx';
import ProgressBar from './comp/progressBar.jsx';
import MessageBox from './comp/messageBox.jsx';
import ToDoList from './comp/toDoList.jsx';
import PostPanel from './comp/postPanel.jsx';

class IndexContent extends React.Component {
    render() {
        const MESSAGES = [
            { by: "me", meta: "John Smith", img: "img/user.jpg", content: "Vivamus diam elit diam, consectetur dapibus adipiscing elit." },
            { by: "me", meta: "Jenifer Smith", img: "img/user22.png", content: " Vivamus diam elit diam, consectetur fconsectetur dapibus adipiscing elit." },
            { by: "me", meta: "John Smith", img: "img/user.jpg", content: "Vivamus diam elit diam, consectetur fermentum sed dapibus eget, Vivamus consectetur dapibus adipiscing elit." },
            { by: "me", meta: "Jenifer Smith", img: "img/user22.png", content: "Vivamus diam elit diam, consectetur dapibus adipiscing elit." },
            { by: "me", meta: "John Smith", img: "img/user.jpg", content: "Vivamus diam elit diam, consectetur fermentum sed dapibus eget, Vivamus consectetur dapibus adipiscing eli." },
        ];
        const TODOS = {
            head: {
                title: "To Do Everyday", userImg: "img/avatar1_small.jpg", userName: "Jenifer smith"
            },
            body: [
                { time: "Today", memo: "web design", type: "Upload", id: "", img: "img/avatar1_small.jpg", status: "" },
                { time: "Yesterday", memo: "Project Design Task", type: "Task", id: "work-progress2", img: "", status: "success" },
                { time: "21-10-14", memo: "Generate Invoice", type: "Task", id: "work-progress3", img: "img/avatar1_small.jpg", status: "success" },
                { time: "22-10-14", memo: "Project Testing", type: "To-Do", id: "", img: "img/avatar1_small.jpg", status: "primary" },
                { time: "24-10-14", memo: "Project Release Date", type: "Milestone", id: "work-progress4", img: "", status: "info" },
                { time: "28-10-14", memo: "Project Release Date", type: "To-Do", id: "work-progress5", img: "", status: "primary" },
                { time: "Last week", memo: "Project Release Date", type: "To-Do", id: "work-progress1", img: "", status: "" },
                { time: "lnast moth", memo: "Project Release Date", type: "To-Do", id: "", img: "img/avatar1_small.jpg", status: "success" },
                { time: "", memo: "", type: "", id: "", img: "", status: "" }]
        };
        return (
            <section id="main-content">
                <section className="wrapper">
                    {/* <!--overview start--> */}
                    <div className="row">
                        <div className="col-lg-12">
                            <PageHeader />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <InfoBox bgcolor="blue-bg" iconcls="fa-cloud-download" count="6.674" title="Download" />
                        </div>
                        {/* <!--/.col--> */}

                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <InfoBox bgcolor="brown-bg" iconcls="fa-shopping-cart" count="7.538" title="Purchased" />
                        </div>
                        {/* <!--/.col--> */}

                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <InfoBox bgcolor="dark-bg" iconcls="fa-thumbs-o-up" count="4.362" title="Order" />
                        </div>
                        {/* <!--/.col--> */}

                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <InfoBox bgcolor="green-bg" iconcls="fa-cubes" count="1.426" title="Stock" />
                        </div>
                        {/* <!--/.col--> */}

                    </div>
                    {/* <!--/.row--> */}


                    <div className="row">
                        <div className="col-lg-9 col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <i className="fa fa-map-marker red"></i><strong>Countries</strong>
                                    <div className="panel-actions">
                                        <a href="index.html#" className="btn-setting"><i className="fa fa-rotate-right"></i></a>
                                        <a href="index.html#" className="btn-minimize"><i className="fa fa-chevron-up"></i></a>
                                        <a href="index.html#" className="btn-close"><i className="fa fa-times"></i></a>
                                    </div>
                                </div>
                                <div className="panel-body-map">
                                    <div id="map" style={{ height: '380px' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <ul className="today-datas">
                                <li>
                                    <div><span id="todayspark1" className="spark"></span></div>
                                    <div className="datas-text">11,500 visitors/day</div>
                                </li>
                                <li>
                                    <div><span id="todayspark2" className="spark"></span></div>
                                    <div className="datas-text">15,000 Pageviews</div>
                                </li>
                                <li>
                                    <div><span id="todayspark3" className="spark"></span></div>
                                    <div className="datas-text">30.55% Bounce Rate</div>
                                </li>
                                <li>
                                    <div><span id="todayspark4" className="spark"></span></div>
                                    <div className="datas-text">$16,00 Revenue/Day</div>
                                </li>
                                <li>
                                    <div><span id="todayspark5" className="spark"></span></div>
                                    <div className="datas-text">12,000000 visitors every Month</div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-9 col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <i className="fa fa-flag-o red"></i><strong>Registered Users</strong>
                                    <div className="panel-actions">
                                        <a href="index.html#" className="btn-setting"><i className="fa fa-rotate-right"></i></a>
                                        <a href="index.html#" className="btn-minimize"><i className="fa fa-chevron-up"></i></a>
                                        <a href="index.html#" className="btn-close"><i className="fa fa-times"></i></a>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <table className="table bootstrap-datatable countries">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Country</th>
                                                <th>Users</th>
                                                <th>Online</th>
                                                <th>Performance</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><img src="img/Germany.png" style={{ height: '18px', marginTop: '-2px' }} /></td>
                                                <td>Germany</td>
                                                <td>2563</td>
                                                <td>1025</td>
                                                <td>
                                                    <ProgressBar value='73' />
                                                    <span className="sr-only">73%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><img src="img/India.png" style={{ height: '18px', marginTop: '-2px' }} /></td>
                                                <td>India</td>
                                                <td>3652</td>
                                                <td>2563</td>
                                                <td>
                                                    <ProgressBar value='57' />
                                                    <span className="sr-only">57%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><img src="img/Spain.png" style={{ height: '18px', marginTop: '-2px' }} /></td>
                                                <td>Spain</td>
                                                <td>562</td>
                                                <td>452</td>
                                                <td>
                                                    <ProgressBar value='93' />
                                                    <span className="sr-only">93%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><img src="img/India.png" style={{ height: '18px', marginTop: '-2px' }} /></td>
                                                <td>Russia</td>
                                                <td>1258</td>
                                                <td>958</td>
                                                <td>
                                                    <ProgressBar value='20' />
                                                    <span className="sr-only">20%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><img src="img/Spain.png" style={{ height: '18px', marginTop: '-2px' }} /></td>
                                                <td>USA</td>
                                                <td>4856</td>
                                                <td>3621</td>
                                                <td>
                                                    <ProgressBar value='20' />
                                                    <span className="sr-only">20%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><img src="img/Germany.png" style={{ height: '18px', marginTop: '-2px' }} /></td>
                                                <td>Brazil</td>
                                                <td>265</td>
                                                <td>102</td>
                                                <td>
                                                    <ProgressBar value='20' />
                                                    <span className="sr-only">20%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><img src="img/Germany.png" style={{ height: '18px', marginTop: '-2px' }} /></td>
                                                <td>Coloumbia</td>
                                                <td>265</td>
                                                <td>102</td>
                                                <td>
                                                    <ProgressBar value='20' />
                                                    <span className="sr-only">20%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><img src="img/Germany.png" style={{ height: '18px', marginTop: '-2px' }} /></td>
                                                <td>France</td>
                                                <td>265</td>
                                                <td>102</td>
                                                <td>
                                                    <ProgressBar value='20' />
                                                    <span className="sr-only">20%</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>
                        {/* <!--/col--> */}
                        <div className="col-md-3">

                            <div className="social-box facebook">
                                <i className="fa fa-facebook"></i>
                                <ul>
                                    <li>
                                        <strong>256k</strong>
                                        <span>friends</span>
                                    </li>
                                    <li>
                                        <strong>359</strong>
                                        <span>feeds</span>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--/social-box--> */}
                        </div>
                        <div className="col-md-3">

                            <div className="social-box google-plus">
                                <i className="fa fa-google-plus"></i>
                                <ul>
                                    <li>
                                        <strong>962</strong>
                                        <span>followers</span>
                                    </li>
                                    <li>
                                        <strong>256</strong>
                                        <span>circles</span>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--/social-box--> */}

                        </div>
                        {/* <!--/col--> */}
                        <div className="col-md-3">

                            <div className="social-box twitter">
                                <i className="fa fa-twitter"></i>
                                <ul>
                                    <li>
                                        <strong>1562k</strong>
                                        <span>followers</span>
                                    </li>
                                    <li>
                                        <strong>2562</strong>
                                        <span>tweets</span>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--/social-box--> */}

                        </div>
                        {/* <!--/col--> */}

                    </div>



                    {/* <!-- statics end --> */}




                    {/* <!-- project team & activity start --> */}
                    <div className="row">
                        <div className="col-md-4 portlets">
                            <MessageBox content={MESSAGES} />
                        </div>

                        <div className="col-lg-8">
                            <ToDoList content={TODOS} />
                        </div>
                        {/* <!--Project Activity end--> */}
                    </div>

                    <div className="row">
                        <div className="col-md-6 portlets">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <strong>Calendar</strong>
                                    <div className="panel-actions">
                                        <a href="#" className="wminimize"><i className="fa fa-chevron-up"></i></a>
                                        <a href="#" className="wclose"><i className="fa fa-times"></i></a>
                                    </div>

                                </div>
                                <div className="panel-body">
                                    {/* <!-- Widget content --> */}

                                    {/* <!-- Below line produces calendar. I am using FullCalendar plugin. --> */}
                                    <div id="calendar"></div>

                                </div>
                            </div>

                        </div>

                        <div className="col-md-6 portlets">
                            <PostPanel/>
                        </div>

                    </div>



                    <div className="text-right">
                        <div className="credits">
                            {/* <!--
        All the links in the footer should remain intact.
        You can delete the links only if you purchased the pro version.
        Licensing information: https://bootstrapmade.com/license/
        Purchase the pro version form: https://bootstrapmade.com/buy/?theme=NiceAdmin
      --> */}
                            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div>
                    </div>
                </section>
            </section >
        );
    }
}
export default IndexContent;
