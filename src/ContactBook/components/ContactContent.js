import React, { useState } from 'react';
import classes from '../todo.module.css';
import ContactEdit from './ContactEdit';
import ContactItem from './ContactItem';

export default function ContactContent(props) {
  const { contactList, setContactList } = props;

  const [editContact, setEditContact] = useState(null);

  const removeContact = (index) => {
    setContactList(contactList.filter((_, i) => i !== index));
  };

  const handleEditClick = (index) => {
    setEditContact(index);
  };

  return (
    <ul className={classes.contactList}>
      {contactList.map((contact, index) =>
        index === editContact ? (
          <ContactEdit
            currentName={contact.name}
            currentEmail={contact.email}
            contactList={contactList}
            setContactList={setContactList}
            index={index}
            setEditContact={setEditContact}
          />
        ) : (
          <ContactItem
            contact={contact}
            index={index}
            removeContact={removeContact}
            handleEditClick={handleEditClick}
          />
        )
      )}
    </ul>
  );
}
