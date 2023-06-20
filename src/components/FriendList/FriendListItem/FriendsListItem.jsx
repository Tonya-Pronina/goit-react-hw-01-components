import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendsListItem.module.css';

export default function FriendsListItem ({avatar, name, isOnline}) {
    return ( 
<li className={css.item}>
  <span className={isOnline ? css.isOnline : css.isOffline}>
    {isOnline}
  </span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li>
 )
}

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,            
}