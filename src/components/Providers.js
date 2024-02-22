import React, { useMemo, useState } from 'react';
import { ThemeContext } from '../context';
import { UserContext } from '../context';

export default function Providers(props) {
    const [user, setUser] = useState(null);

    // 通过useMemo缓存对象,优化渲染
    const contextValue = useMemo(() => {
        return {
            user,
            setUser,
        };
    }, [user]);

    return (
        <ThemeContext.Provider value={props.theme}>
            <UserContext.Provider value={contextValue}>
                {props.children}
            </UserContext.Provider>
        </ThemeContext.Provider>
    );
}
