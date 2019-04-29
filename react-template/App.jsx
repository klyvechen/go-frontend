import React, { Component } from 'react';
import Header from './Header.jsx'
import SideBar from './SideBar.jsx'
import IndexContent from './IndexContent.jsx';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends React.Component {
   render() {
      const SIDEBAR_MODEL = [
         {type: "sub-menu", href: "javascript:;", icon: "icon_document_alt", name: "採購", children: [
            {type: "", href: "form_component.html", icon: "", name: "採購單預購", children: []},
            {type: "", href: "form_validation.html", icon: "", name: "採購單分析", children: []}
         ]},
         {type: "active", href: "/index.html", icon: "icon_house_alt", name: "Dashboard", children: []},
         {type: "sub-menu", href: "javascript:;", icon: "icon_document_alt", name: "Forms", children: [
            {type: "", href: "form_component.html", icon: "", name: "Form Elements", children: []},
            {type: "", href: "form_validation.html", icon: "", name: "Form Validation", children: []},
         ]},
         {type: "sub-menu", href: "javascript:;", icon: "icon_desktop", name: "UI Fitures", children: [
            {type: "", href: "general.html", icon: "", name: "Elements", children: []},
            {type: "", href: "buttons.html", icon: "", name: "Buttons", children: []},
            {type: "", href: "grids.html", icon: "", name: "Grids", children: []}
         ]},
         {type: "active", href: "widgets.html", icon: "icon_genius", name: "Widgets", children: []},
         {type: "active", href: "chart-chartjs.html", icon: "icon_piechart", name: "Charts", children: []},
         {type: "sub-menu", href: "basic_table.html", icon: "icon_table", name: "Basic Table", children: []},
         {type: "sub-menu", href: "javascript:;", icon: "icon_documents_alt", name: "Pages", children: [
            {type: "", href: "profile.html", icon: "", name: "Profile", children: []},
            {type: "", href: "login.html", icon: "", name: "Login Page", children: []},
            {type: "", href: "contact.html", icon: "", name: "Contact Page", children: []},
            {type: "", href: "blank.html", icon: "", name: "Blank Page", children: []},
            {type: "", href: "404.html", icon: "", name: "404 Error", children: []}
         ]},
      ];
      return (
         <section id="container" className="">
            <Router>
               <Header></Header>
               <SideBar model={SIDEBAR_MODEL}/>
               <Route exact path="/index.html" component={IndexContent} />
            </Router>
         </section>
      );
   }
}
export default App;