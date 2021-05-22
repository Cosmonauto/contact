import React, { useState } from 'react';
import classes from '../todo.module.css';

export default function Form(props) {
  const { contactList, setContactList } = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    setContactList([...contactList, { name, email }]);
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
