import React from 'react';
import './UserList.css';
import UserItem from './UserItem';

export default function UserList({ users }) {
    return (
        <div className='user-list'>
            {users && users.map(user =>
                <UserItem key={user.id} user={user} />
            )}
        </div>
    );
}