import React, {useState, createContext, useEffect} from 'react'

const UserContext = createContext();

export default UserContext;

export function UserProvider (props) {
 
    const [user, setUser] = useState({
        name: "luguin",
        userId: 4,
        email: "luguin@gmail.com",
        token: "e1f7aa60-042d-4f90-a920-27f0469c152f"
    });
    

    console.log(user);

    return (
        <UserContext.Provider value = {{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    );
}