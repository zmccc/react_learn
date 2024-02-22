import classNames from 'classnames';
import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import './Button.scss';

export default function Button(props) {
  const theme = useContext(ThemeContext);

  return <button className={classNames('btn', theme)}>{props.children}</button>;
}
