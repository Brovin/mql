import React from 'react';
import style from './Header.module.css';

export default props => (
  <header className={style.header}>
    <nav>
      <ul className=''>
        {props.names.map(item => (<li key={item.id}>{item.name}</li>))}
      </ul>
    </nav>
  </header>
);