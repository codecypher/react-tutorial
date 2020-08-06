/*
 * Lifting State Up
 * https://reactjs.org/docs/lifting-state-up.html
 */

import ReactDOM from "react-dom";
import React from "react";

// The BoilingVerdict component accepts the celsius temperature
// as a prop and prints whether it is enough to boil the water.
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;

}

// The Calculator component renders an <input> that lets you enter the temperature
// and keeps its value in this.state.temperature.
// It also renders the BoilingVerdict for the current input value.
class CalculatorCelsius extends React.Component {
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
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />
                <BoilingVerdict
                    celsius={parseFloat(temperature)} />
            </fieldset>
        );
    }
}

// ReactDOM.render(
//     <Calculator />,
//     document.getElementById('root')
// );

