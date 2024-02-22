import classNames from 'classnames';
import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import './WelcomePanel.scss';

export default function WelcomePanel(props) {
  // 用于读取上下文的值
  const theme = useContext(ThemeContext);

  return (
    <div className={classNames('wel-container', theme)}>
      <h1>Welcome</h1>
      {props.children}
    </div>
  );
}
