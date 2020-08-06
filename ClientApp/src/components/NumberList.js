/**
 * Lists and Keys
 * https://reactjs.org/docs/lists-and-keys.html
 */

import React from "react";
import ReactDOM from "react-dom";

function ListItem(props) {
    // Correct! There is no need to specify the key here.
    return <li>{props.value}</li>;
}

const numbers = [1, 2, 3, 4, 5];

// Extracting Components with Keys
// A good rule of thumb is that elements inside the map() call need keys.
export class NumberList extends React.Component {
    constructor(props) {
        super(props);
        this.listItems = numbers.map((number) =>
            // Correct! Key should be specified inside the array.
            <ListItem key={number.toString()} value={number} />
        );
    }

    render() {
        return (
            <div>
                <ul>
                    {this.listItems}
                </ul>
            </div>
        );

    }
}

// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
// );


