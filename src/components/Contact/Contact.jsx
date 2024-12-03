import s from './Contact.module.css'

function Contact({ user, handleDeleteContactUser }) {
  return (
      <div className={s.contact}>
       <div>
        <p >{user.name}</p>
        <p >{user.number}</p>
      </div>
      <button
        className={s.button}
        type='button'
        onClick={() => handleDeleteContactUser(user.id)}
      >
        Видалити
      </button>    
    </div>
  )
}

export default Contact