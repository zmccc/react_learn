import classNames from 'classnames';
import React, { useContext } from 'react';
import './Button.scss';
import { ThemeContext, UserContext } from '../context';

export default function Button(props) {
    const theme = useContext(ThemeContext);
    const { user, setUser } = useContext(UserContext);

    console.log('button render');

    if (user) {
        return <span>hello, {user.name}</span>;
    }

    return (
        <button
            className={classNames('btn', theme)}
            onClick={() => setUser({ name: 'xiaomo' })}
        >
            {props.children}
        </button>
    );
}
