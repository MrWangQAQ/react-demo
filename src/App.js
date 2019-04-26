import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from "./components/searchGoods/FilterableProductTable"

var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: [],
            description: []
        };
        this.my_this = this;
    }
    render() {
      return (
        /*<div className="App" onClick={this.clickD.bind(this, this.my_this)}>{this.state.title+this.state.description+"112313213"}<Calculator />,
        </div>*/
          <div>
              <FilterableProductTable products = {PRODUCTS}/>
          </div>
      );
    }

    clickD(_this) {
        let res = {
            title: [{ddd: '1111'}],
            description: [{aaa: '33333'}]
        };
        let myThis = _this;
        if(this) {
            myThis = this;
        }
        myThis.setState({
            title: res.title
        });
        myThis.setState({
            description: res.description
        });
    }
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
        //console.log(this.state)
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
        //console.log(this.state)
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}/>

                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}/>

                <BoilingVerdict
                    celsius={parseFloat(celsius)}/>

            </div>
        );
    }
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>水会烧开</p>;
    }
    return <p>水不会烧开</p>;
}
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
export default App;
