import React, { Component } from 'react';
import Table from '../comp/table.jsx';

/**
 * 此組件為向後段索取商品庫存資料資料
 * 提供使用者提供商品顯示庫存資訊, 依照使用者權限修改庫存資訊
 */
class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            INVENTORY_DATA: null
        };
        this._isMounted = false; // It is need for mounted
    }


    loadData() {
        console.debug("......loading store model......")
        if (!this.state.INVENTORY_DATA) {
           fetch('http://localhost:8003/inventoryData')
              .then(response => response.json())
              .then(data => {
                console.log(data);
                 console.debug("InventoryData is loaded, Mounted is", this._isMounted)
                 if (this._isMounted) {
                    console.debug("InventoryData is loaded, setting state mountload is true")
                    this.setState({ INVENTORY_DATA: data }); 
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
                    {this.state && this.state.INVENTORY_DATA &&
                        <div>{<Table model={this.state.INVENTORY_DATA}/>}</div>
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
export default AddProduct;