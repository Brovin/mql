import React from 'react';
import styles from './contact.module.css';

const Contact = ({ContactTitle, ContactValue}) => {
  return <div className={styles.contact}><b>{ContactTitle}:</b>{ContactValue}</div>
};

export default Contact;