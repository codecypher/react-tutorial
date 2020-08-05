/*
 * Lifting State Up
 * https://reactjs.org/docs/lifting-state-up.html
 * Adding a Second Input
 * We provide both a Celsius and Fahrenheit inputs and they are kept in sync.
 */

import ReactDOM from "react-dom";
import React from "react";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

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

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        // The props including onTemperatureChange are provided by the parent component Calculator.
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

// Now the inputs stay in sync because their values are computed from the same state.
// No matter which input you edit, this.state.temperature and this.state.scale in the Calculator get updated.
// One of the inputs gets the value as is (so any user input is preserved) and the other input value is
// always recalculated based on it.
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    // Ask React to re-render itself by calling this.setState() with the
    // new input value and the current scale of the input we just edited.
    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    // React calls the Calculator component’s render method to learn what the UI should look like.
    // The values of both inputs are recomputed based on the current temperature and the active scale.
    // React calls the render methods of the individual TemperatureInput components with their new props
    // specified by the Calculator. It learns what their UI should look like.
    // React calls the render method of the BoilingVerdict component, passing the temperature in Celsius as its props.
    // React DOM updates the DOM with the boiling verdict and to match the desired input values.
    // The input we just edited receives its current value, and the other input is updated to the temperature after conversion.
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
                    onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

// ReactDOM.render(
//     <Calculator />,
//     document.getElementById('root')
// );

