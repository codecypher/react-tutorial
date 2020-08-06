/**
 * Hooks at a Glance
 * Using the State Hook
 * Using the Effect Hook
 * https://reactjs.org/docs/hooks-overview.html
 */
import React, { useState, useEffect } from 'react';

// This component sets the document title after React updates the DOM.
function Example() {
    // Declare a new state variable called "count".
    // We declare a new state variable by calling the useState Hook.
    // It returns a pair of values that we give names.
    // The first item holds the number of button clicks.
    // We initialize it to zero by passing 0 as the only useState argument.
    // The second item is a function that lets us update the count, so we name it setCount.
    const [count, setCount] = useState(0);

    // We tell React we need to use an effect.
    // An effect is similar to componentDidMount, componentDidUpdate, and componentWillUnmount combined.
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
