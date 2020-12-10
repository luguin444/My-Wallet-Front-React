import React, {useState, createContext, useEffect} from 'react'

const UserContext = createContext();

export default UserContext;

export function UserProvider (props) {
 
    const [user, setUser] = useState(null);

    // {
    //     "id": 73,
    //     "userId": 72,
    //     "token": "f5c7313d-2b1d-4e46-9b8d-c60df98acc16",
    //     "name": "luguin"
    // }

    return (
        <UserContext.Provider value = {{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    );
}