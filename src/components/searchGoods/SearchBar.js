import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.onFilterTextInput = this.onFilterTextInput.bind(this)
        this.onInStockOnlyInput = this.onInStockOnlyInput.bind(this)
    }

    onFilterTextInput(e){
        this.props.onFilterTextInput(e.target.value)
    }

    onInStockOnlyInput(e) {
        this.props.onInStockOnlyInput(e.target.checked)
    }

    render() {
        return(
            <div>
                <input type="text" placeholder="Search" value={this.props.filterText}  onChange={this.onFilterTextInput}/>
                <div>
                    <input type="checkbox" checked={this.props.inStockOnly} onChange={this.onInStockOnlyInput}/>
                    <span> Only show products in stock </span>
                </div>
            </div>
        )
    }
}

export default SearchBar;