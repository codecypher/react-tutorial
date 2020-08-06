/**
 * Hooks at a Glance
 * Using the State Hook
 * Using the Effect Hook
 * https://reactjs.org/docs/hooks-overview.html
 */

import React, { useState, useEffect } from 'react';

// This component uses an effect to subscribe to a friend’s online status, and cleans up by unsubscribing from it.
// Just like with useState, you can use more than a single effect in a component.
function FriendStatus(props) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {
        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        // Specify how to clean up after this effect.
        // return function cleanup() {
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        };
    });

    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
    }

    if (isOnline === null) {
        return 'Loading...';
    }

    return isOnline ? 'Online' : 'Offline';
}
