/*
 * Forms
 * https://reactjs.org/docs/forms.html
 *  HTML form elements work a little bit differently from other DOM elements in React
 * because form elements naturally keep some internal state.
 */

import ReactDOM from "react-dom";
import React from "react";

// We want to make the previous example log the name when it is submitted
// so we can write the form as a controlled component.
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
