/**
 * Lists and Keys
 * https://reactjs.org/docs/lists-and-keys.html
 */

import ReactDOM from "react-dom";
import React from "react";

function ListItem(props) {
    // Correct! There is no need to specify the key here.
    return <li>{props.value}</li>;
}

// Extracting Components with Keys
// A good rule of thumb is that elements inside the map() call need keys.
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={number.toString()} value={number} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')

);


