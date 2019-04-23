import React, { Component } from 'react';
import Header from './Header.jsx'
import SideBar from './SideBar.jsx'
import SideBarItem from './SideBarItem.jsx';
import IndexContent from './IndexContent.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends React.Component {
   render() {
      return (
         <section id="container" className="">
            <Router>
               <Header></Header>
               <SideBar>
                  <SideBarItem clsName={'sub-menu'} href={'javascript:;'} iconcls={'icon_document_alt'} value={'採購'} hasChild={true}>
                     <SideBarItem href={'form_component.html'} value={'採購單預購'} />
                     <SideBarItem href={'form_validation.html'} value={'採購單分析'} />
                  </SideBarItem>
                  <SideBarItem clsName={'active'} href={'/index.html'} iconcls={'icon_house_alt'} value={'Dashboard'} />
                  <SideBarItem clsName={'sub-menu'} href={'javascript:;'} iconcls={'icon_document_alt'} value={'Forms'} hasChild={true}>
                     <SideBarItem href={'form_component.html'} value={'Form Elements'} />
                     <SideBarItem href={'form_validation.html'} value={'Form Validation'} />
                  </SideBarItem>
                  <SideBarItem clsName={'sub-menu'} href={'javascript:;'} iconcls={'icon_desktop'} value={'UI Fitures'} hasChild={true}>
                     <SideBarItem href={'general.html'} value={'Elements'} />
                     <SideBarItem href={'buttons.html'} value={'Buttons'} />
                     <SideBarItem href={'grids.html'} value={'Grids'} />
                  </SideBarItem>

                  <SideBarItem clsName={'active'} href={'widgets.html'} iconcls={'icon_genius'} value={'Widgets'} />
                  <SideBarItem clsName={'active'} href={'chart-chartjs.html'} iconcls={'icon_piechart'} value={'Charts'} />

                  <li className="sub-menu">
                     <a href="javascript:;" className="">
                        <i className="icon_table"></i>
                        <span>Tables</span>
                        <span className="menu-arrow arrow_carrot-right"></span>
                     </a>
                     <ul className="sub">
                        <li><a className="" href="basic_table.html">Basic Table</a></li>
                     </ul>
                  </li>

                  <li className="sub-menu">
                     <a href="javascript:;" className="">
                        <i className="icon_documents_alt"></i>
                        <span>Pages</span>
                        <span className="menu-arrow arrow_carrot-right"></span>
                     </a>
                     <ul className="sub">
                        <li><a className="" href="profile.html">Profile</a></li>
                        <li><a className="" href="login.html"><span>Login Page</span></a></li>
                        <li><a className="" href="contact.html"><span>Contact Page</span></a></li>
                        <li><a className="" href="blank.html">Blank Page</a></li>
                        <li><a className="" href="404.html">404 Error</a></li>
                     </ul>
                  </li>
               </SideBar>
               <Route exact path="/index.html" component={IndexContent} />
            </Router>
         </section>
      );
   }
}
export default App;