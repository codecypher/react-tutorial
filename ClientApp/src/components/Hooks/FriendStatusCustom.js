/**
 * Hooks at a Glance
 * Building Your Own Hooks
 * https://reactjs.org/docs/hooks-overview.html
 */

import React, { useState, useEffect } from 'react';

// Sometimes we want to reuse some stateful logic between components.
// Suppose we want to subscribe to a friend’s online status,
// and we want to reuse this subscription logic in multiple components.

// First, we extract this logic into a custom Hook.
// It takes friendID as an argument, and returns whether our friend is online.
// Now we can use it from both components.
function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);

    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
    }

    useEffect(() => {
        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        // Specify how to clean up after this effect.
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        };
    });

    return isOnline;
}

// This component displays a message indicating whether a friend is online or offline.
function FriendStatus(props) {
    const isOnline = useFriendStatus(props.friend.id);

    if (isOnline === null) {
        return 'Loading...';
    }
    return isOnline ? 'Online' : 'Offline';
}

// Say that our chat application also has a contact list
// and we want to render names of online users with a green color.
function FriendListItem(props) {
    const isOnline = useFriendStatus(props.friend.id);

    return (
        <li style={{ color: isOnline ? 'green' : 'black' }}>
            {props.friend.name}
        </li>
    );
}
