import React from 'react';
import './UserItem.css';

export default function UserItem({ user: { id, name, username, email } }) {
    return (
        <div className='user-item'>
            <figure>
                <img src={`https://picsum.photos/seed/${id}/300/200`} alt={name} />
            </figure>
            <div className='item-info'>
                <h2>{name}</h2>
                <h3>@{username}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}