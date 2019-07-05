import React, { Component } from 'react';
import Supplier from './Supplier.jsx';
import TabNav from '../comp/tabNav.jsx';
import TabNavItem from '../comp/tabNavItem.jsx';

/**
 * 此組件為向後段索取商品資料
 * 提供使用者提供商品 
 * 1. 庫存資訊, Inventory.jsx
 * 2. 進貨資訊, 
 * 3. 出貨資訊, 
 * 4. 新增/刪除 商品
 */
class SupplierManagement extends React.Component {
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
        console.log("product management!");
        return (
            <TabNav>
                <TabNavItem name="廠商清單">
                    <Supplier />
                </TabNavItem>
                <TabNavItem name="新增">
                </TabNavItem>
            </TabNav>
        );
    }
}
export default SupplierManagement;