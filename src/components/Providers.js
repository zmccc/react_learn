import React, { useState } from 'react';
import { ThemeContext } from '../context';
import { UserContext } from '../context';

export default function Providers(props) {
    const [user, setUser] = useState(null);

    return (
        <ThemeContext.Provider value={props.theme}>
            <UserContext.Provider
                value={{
                    user,
                    setUser,
                }}
            >
                {props.children}
            </UserContext.Provider>
        </ThemeContext.Provider>
    );
}
