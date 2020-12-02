import React, {useState, createContext} from 'react'

const UserContext = createContext();

export default UserContext;

export function UserProvider (props) {
 
    const [user, setUser] = useState(null);

    console.log(user);

    return (
        <UserContext.Provider value = {{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    );
}