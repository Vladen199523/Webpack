import React, {useEffect, useState} from 'react';
import List from '../users/components/list/index';


const usersList = [
    {id: 1, name: 'dima', age:32},
    {id: 2, name: 'vasia', age:22},
    {id: 3, name: 'petya', age:26},
    {id: 4, name: 'pavel', age:4},
    {id: 5, name: 'petr', age:18},
    {id: 6, name: 'felix', age:19},
]


const UsersContext = React.createContext();
const {Provider} = UsersContext;


const Users =  () => {

    const [users, setUsers] = useState ([]);

    useEffect (() => {
        setUsers (usersList);
    }, [])


const deleteUser = (id) => {
    const newUsers = users.filter (user => user.id !== id);
    setUsers (newUsers);
}


    return (
        <Provider value = {{ users, deleteUser }}>
            <List onDeleteUser = {deleteUser} items = {users}/>
        </Provider>
    )
}

export {
    UsersContext
}

export default Users;