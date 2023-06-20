import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendsList.module.css';
import FriendsListItem from './FriendListItem/FriendsListItem';


export default function FriendsList ({friends}) {
    return ( 
<ul className={css.friendsList}>
    {friends.map(({avatar, name, isOnline, id}) => {
        return (
            <FriendsListItem
            avatar={avatar}
            key={id}
            name={name}
            isOnline={isOnline}
            />
        )
    })}
</ul>
 );
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired
}