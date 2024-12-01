import s from './Contact.module.css'

function Contact({ user, handleDeleteContactUser }) {
  return (
      <div>
       <div>
        <p >{user.name}</p>
        <p >{user.number}</p>
      </div>
      <button
        type='button'
        onClick={() => handleDeleteContactUser(user.id)}
      >
        Видалити
      </button>    
    </div>
  )
}

export default Contact