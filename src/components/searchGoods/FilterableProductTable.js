import React, { Component } from 'react';
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };

        this.setInStockOnlyInput = this.setInStockOnlyInput.bind(this);
        this.setFilterTextInput = this.setFilterTextInput.bind(this);
    }

    setFilterTextInput(val){
        this.setState({
            filterText: val
        })
    }

    setInStockOnlyInput(val) {
        this.setState({
            inStockOnly: val
        })
    }

    render() {
        return(
            <div>
                <SearchBar
                    filterText = {this.state.filterText}
                    inStockOnly = {this.state.inStockOnly}
                    onFilterTextInput = {this.setFilterTextInput}
                    onInStockOnlyInput = {this.setInStockOnlyInput}
                />
                <ProductTable
                    filterText = {this.state.filterText}
                    products = {this.props.products}
                />
            </div>
        )
    }
}


export default FilterableProductTable