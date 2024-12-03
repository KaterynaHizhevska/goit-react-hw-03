import Contact from '../Contact/Contact'
import s from './ContactList.module.css'

function ContactList({ userContacts, handleDeleteContactUser }) {
    const createContact = userContacts.map(user => (
    <li key={user.id}>
      <Contact user={user} handleDeleteContactUser={handleDeleteContactUser} />
    </li>
  ));
  return (
     <div>
      <ul className={s.list}>{createContact}</ul>
    </div>
  )
}

export default ContactList