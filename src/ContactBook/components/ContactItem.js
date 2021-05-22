import React from 'react';
import cancelImg from '../../assets/icons/user-minus-solid.svg';
import editImg from '../../assets/icons/user-edit-solid.svg';
import classes from '../todo.module.css';

export default function ContactItem(props) {
  const { contact, index, removeContact, handleEditClick } =
    props;

  return (
    <li key={index}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>Name:</p>
        <p>
          <span>
            {contact.name}
          </span>
        </p>
        <p>Email:</p>
        <p>
          {contact.email}
        </p>
      </div>
      <img
        className={classes.cancelIcon}
        src={cancelImg}
        onClick={() => removeContact(index)}
        alt="cancel-img"
      />
      <img
        onClick={() => handleEditClick(index)}
        className={classes.editIcon}
        src={editImg}
        alt="edit-img"
      />
    </li>
  );
}
