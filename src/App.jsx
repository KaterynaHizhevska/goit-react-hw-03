import { useEffect, useState } from 'react'
import AddForm from "./components/ContactForm/ContactForm"
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import contactData from './components/data/contactData.json'
import { nanoid } from 'nanoid'
import './App.css'

function App() {
  const [userContacts, setUserContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('userContacts')) ?? contactData
    );
  });

  const [searchUser, setSearchUser] = useState('');

  const filteredContacts = userContacts.filter(item =>
  item.name && item.name.toLowerCase().includes(searchUser.toLowerCase())
);
  const handleDeleteContactUser = id => {
    setUserContacts(prev => prev.filter(item => item.id !== id));
  };

   useEffect(() => {
    window.localStorage.setItem('contactUser', JSON.stringify(userContacts));
   }, [userContacts]);
  

   const addContact = ({ values }) => {
    setUserContacts(prev => [...prev, { id: nanoid(), ...values }]);
  };

  return (
    <div className='container'>
      <h1 className='title'>Телефонна книга</h1>
      <AddForm addContact={addContact} />
      <SearchBox searchUser={searchUser} setSearchUser={setSearchUser} />
      <ContactList
        userContacts={filteredContacts}
        handleDeleteContactUser={handleDeleteContactUser}
      />
    </div>
  )
}

export default App
