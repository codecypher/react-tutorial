/**
 * Handling Events
 * https://reactjs.org/docs/handling-events.html
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make "this" work in the callback.
        this.handleClick = this.handleClick.bind(this);
    }

    //handleClick() {
    //    this.setState(state => ({
    //        isToggleOn: !state.isToggleOn
    //    }));
    //}

    // This syntax ensures "this" is bound within handleClick
    // without having to call bind().
    // Warning: this is *experimental* syntax.
    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    // Passing Arguments to Event Handlers
    // Inside a loop, it is common to want to pass an extra parameter to an event handler.
    // For example, if id is the row ID:
    // <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>

    render() {
        const numbers = [1, 2, 3, 4, 5];
        return (
            <div>
                Toggle:
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <div>
                    List: <NumberList numbers={numbers} />
                </div>
            </div>
        );
    }
}
