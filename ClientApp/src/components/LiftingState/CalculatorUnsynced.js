/*
 * Lifting State Up
 * https://reactjs.org/docs/lifting-state-up.html
 * Adding a Second Input
 * Our new requirement is that we provide both a Celsius and Fahrenheit inputs
 * and they are kept in sync.
 */

import ReactDOM from "react-dom";
import React from "react";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
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

// We can now change the Calculator to render two separate temperature inputs.
// In this version, the TemperatureInput components keep their values
// independently in the local state, but we would like to keep them in sync.
class Calculator extends React.Component {
    render() {
        return (
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
        );
    }
}

// ReactDOM.render(
//     <Calculator />,
//     document.getElementById('root')
// );


