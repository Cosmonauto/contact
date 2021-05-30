import React, { useContext } from 'react';
import cancelImg from '../../assets/icons/user-minus-solid.svg';
import editImg from '../../assets/icons/user-edit-solid.svg';
import { contactContext } from '../../ContactContext';
import classes from '../todo.module.css';

export default function ContactItem(props) {
  const { name, email, id } = props.data;
  const { deleteContact, changeEditId } = useContext(contactContext);

  const removeContact = () => {
    deleteContact(id);

  }


  return (
    <li>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>Name:</p>
        <p>
          <span>
            {name}
          </span>
        </p>
        <p>Email:</p>
        <p>
          {email}
        </p>
      </div>
      <img
        className={classes.cancelIcon}
        src={cancelImg}
        onClick={removeContact}
        alt="cancel-img"
      />
      <img
        onClick={() => changeEditId(id)}
        className={classes.editIcon}
        src={editImg}
        alt="edit-img"
      />
    </li>
  );
}
