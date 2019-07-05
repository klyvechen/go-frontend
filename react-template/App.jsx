import React, { Component } from 'react';
import Header from './Header.jsx'
import SideBar from './SideBar.jsx'
import IndexContent from './page/IndexContent.jsx';
import SupplierManagement from './page/SupplierManagement.jsx';
import StoreManagement from './page/StoreManagement.jsx';
import ProductManagement from './page/ProductManagement.jsx';
import TopologyContent from './page/TopologyContent.jsx';
import { HashRouter as Router, Route } from "react-router-dom";


class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         SIDEBAR_MODEL: null,
      };
      this._isMounted = false; // It is need for mounted
   }

   loadData() {
      console.debug("......loading sidebar model......")
      if (!this.state.SIDEBAR_MODEL) {
         fetch('http://localhost:8003/sidebar')
            .then(response => response.json())
            .then(data => {
               console.debug("Data is loaded, Mounted is", this._isMounted)
               if (this._isMounted)  {
                  console.debug("Data is loaded, setting state mountload is true")
                  this.setState({ SIDEBAR_MODEL: data }); 
               } 
            })
      }
   }

   componentWillMount() {
      console.debug("App will be Mounted ");
   }
   componentDidMount() {
      console.debug("App is Mounted ");
      this._isMounted = true;
      this.loadData();
   }

   componentWillUnmount() {
      console.debug("App will be Unmounted ");
      this._isMounted = false;
   }

   render() {
      return (
         <div>
            <section id="container" className="sidebar-close sidebar-closed">
               <Router>
                  <Header />
                  {
                     this.state && this.state.SIDEBAR_MODEL &&
                     <div>{<SideBar id="siedebarId" model={this.state.SIDEBAR_MODEL} />}</div>
                  }
                  <section id="main-content">
                     <section className="wrapper">
                        <Route exact path="/index" component={IndexContent} />
                        <Route path="/supplier" component={SupplierManagement} />
                        <Route path="/store" component={StoreManagement} />
                        <Route path="/topology" component={TopologyContent} />
                        <Route path="/productManagement" component={ProductManagement} />
                     </section>
                  </section>
               </Router>
            </section>
         </div>
      );
   }
}
export default App;