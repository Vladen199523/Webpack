import React, { useContext } from 'react';
import styles from './style.module.scss';
import UserItem from './components/useritem';
import { UsersContext } from '../../index';

const List = ({}) => {
   const {users} =  useContext (UsersContext);
    return (
        <div className = {styles.list}>
            {users.map (item => (
                <UserItem 
                    key = {item.id}
                    name = {item.name}
                    id={item.id}
                    age = {item.age}
                />
        ))}
    </div>
    )
}

export default List;