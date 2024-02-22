import classNames from 'classnames';
import React, { useContext } from 'react';
import { ThemeContext, UserContext } from '../App';
import './Button.scss';

export default function Button(props) {
  const theme = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);
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
