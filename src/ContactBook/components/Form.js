import React, { useContext, useState } from 'react';
import classes from '../todo.module.css';
import { contactContext } from '../../ContactContext'


export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const { createContact } = useContext(contactContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
    };
    createContact(data);
    setName('');
    setEmail('');
  };

  return (
    <div className={classes.formWrapper}>
      <h2>Contact Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          name="Name"
          type="text"
          required
          value={name}
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          name="Email"
          type="text"
          required
          value={email}
        />
        <button>Add Contact</button>
      </form>

    </div>
  );
}
