import React, {Component} from "react"
import ProductCategoryRow  from "./ProductCategoryRow"
import ProductRow   from "./ProductRow"

class ProductTable extends Component {
    constructor (props){
        super(props);

    }

    render() {
        return(
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <ProductTbaleContent products = {this.props.products} filterText = {this.props.filterText}/>
            </table>
        )
    }
}

function ProductTbaleContent(props){
    let lastCategory = null;
    let products = props.products;
    let rows = [];
    let filterText = props.filterText;
    products.forEach( v => {
        console.log(filterText)
        if(filterText === '' || v.name.indexOf(filterText) !== -1){
            if(lastCategory !== v.category) {
                rows.push( <ProductCategoryRow category = {v.category} /> );
            }
            rows.push( <ProductRow product={v}/> );
            lastCategory = v.category;
        }

    });
    return rows;
}

export default ProductTable