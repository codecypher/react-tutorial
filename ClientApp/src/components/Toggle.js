/**
 * Handling Events
 * https://reactjs.org/docs/handling-events.html
 *
 * Lists and Keys
 * https://reactjs.org/docs/lists-and-keys.html
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Extracting Components with Keys
// A good rule of thumb is that elements inside the map() call need keys.

function ListItem(props) {
    // Correct! There is no need to specify the key here.
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={number.toString()} value={number} />
    );

    //const listItems = numbers.map((number) =>
    //    <li key={number.toString()}>
    //        {number}
    //    </li>
    //);

    // The best way to pick a key is to use a string that uniquely identifies
    // a list item among its siblings.
    // Most often you would use IDs from your data as keys.
    // We do not recommend using indexes for keys if the order of items may change.
    //const todoItems = todos.map((todo) =>
    //    <li key={todo.id}>
    //        {todo.text}
    //    </li>
    //);

    return (
        <ul>
            {listItems}
        </ul>
    );
}


// Keys serve as a hint to React but they don’t get passed to your components.
// If you need the same value in your component, pass it explicitly as a
// prop with a different name.
// Here the Post component can read props.id, but not props.key.
//const content = posts.map((post) =>
//    <Post
//        key={post.id}
//        id={post.id}
//        title={post.title} />
//);


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
