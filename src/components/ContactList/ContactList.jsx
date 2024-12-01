import Contact from '../Contact/Contact'

function ContactList({ userContacts, handleDeleteContactUser }) {
    const createContact = userContacts.map(user => (
    <li key={user.id}>
      <Contact user={user} handleDeleteContactUser={handleDeleteContactUser} />
    </li>
  ));
  return (
     <div>
      <ul>{createContact}</ul>
    </div>
  )
}

export default ContactList