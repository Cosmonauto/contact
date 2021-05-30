import classes from '../todo.module.css';
import React, { useContext, useState } from 'react';
import { contactContext } from '../../ContactContext';

export default function ContactEdit(props) {
  const { name: currentName, email: currentEmail, id } = props.data;

  const [name, setName] = useState(currentName);
  const [email, setEmail] = useState(currentEmail);

  const { changeContact } = useContext(contactContext);

  const handleEdit = (e) => {
    e.preventDefault();
    changeContact(id, email, name);
  };

  return (
    <li className={classes.editingTodo}>
      <form onSubmit={handleEdit}>
        <input
          onChange={(e) => setName(e.target.value)}
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
