import classes from '../todo.module.css';
import React, { useState } from 'react';

export default function ContactEdit(props) {
  const { currentName, currentEmail, contactList, setContactList, index, setEditContact } = props;

  const [name, setTitle] = useState(currentName);
  const [email, setEmail] = useState(currentEmail);

  const handleEdit = (e) => {
    e.preventDefault();
    setContactList(
      contactList.map((todo, i) => (i === index ? { ...todo, name, email } : todo))
    );
    setEditContact(null);
  };

  return (
    <li className={classes.editingTodo}>
      <form onSubmit={handleEdit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="name"
          required
          value={name}
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          required
          value={email}
        />
        <button>Save</button>
      </form>
    </li>
  );
}
