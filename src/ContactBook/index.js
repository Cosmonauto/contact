import React, { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/ContactContent';

export default function ContactBook() {
  const [contactList, setContactList] = useState([]);

  return (
    <div>
      <Form contactList={contactList} setContactList={setContactList} />

      <TodoList contactList={contactList} setContactList={setContactList} />
    </div>
  );
}
