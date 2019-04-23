import React, { Component } from 'react';
import Header from './Header.jsx'
import SideBar from './SideBar.jsx'
import MainContent from './MainContent.jsx'


class App extends React.Component{
   render(){
      return(
         <section id="container" class="">
            <Header></Header>
            <SideBar></SideBar>
            <MainContent></MainContent>
         </section>
      );
   }
}
export default App;