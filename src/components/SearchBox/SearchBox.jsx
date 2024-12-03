import s from './SearchBox.module.css'

function SearchBox({ setSearchUser }) { 
  const handleSearchUser = event => {
    setSearchUser(event.target.value.toLowerCase());
  };

  return (
    <form className={s.container}>
          <label>
              <span className={s.span}>Знайти контакт за іменем
                  </span>
              </label>
      <input className={s.input}
        type="text"
        onChange={handleSearchUser}
        placeholder="Введіть ім'я"
      />
    </form>
  );
}

export default SearchBox;


