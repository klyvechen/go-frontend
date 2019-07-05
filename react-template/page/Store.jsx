import React, { Component } from 'react';
import Table from '../comp/table.jsx';

class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            STORE_DATA: null
        };
        this._isMounted = false; // It is need for mounted
    }


    loadData() {
        console.debug("......loading store model......")
        if (!this.state.STORE_DATA) {
           fetch('http://localhost:8003/storeData')
              .then(response => response.json())
              .then(data => {
                console.log(data);
                 console.debug("StoreData is loaded, Mounted is", this._isMounted)
                 if (this._isMounted) {
                    console.debug("StoreData is loaded, setting state mountload is true")
                    this.setState({ STORE_DATA: data }); 
                 } 
              })
        }
     }

     componentWillMount() {
        console.debug("App will be Mounted ");
     }

     componentWillUnmount() {
        console.debug("App will be Unmounted ");
     }
  

    componentDidMount() {
        console.debug("App is Mounted ");
        this._isMounted = true;
        this.loadData();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                    {this.state && this.state.STORE_DATA &&
                        <div>{<Table model={this.state.STORE_DATA}/>}</div>
                    }
                    </div>
                    <div className="col-sm-9 col-md-11">
                        <Table/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Store;