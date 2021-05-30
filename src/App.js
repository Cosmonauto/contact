import React from 'react';
import ContactBook from './ContactBook';
import ContactContextProvider from './ContactContext'

function App() {
  return (
    <ContactContextProvider>
      <ContactBook />
    </ContactContextProvider>
  );
}

export default App;
