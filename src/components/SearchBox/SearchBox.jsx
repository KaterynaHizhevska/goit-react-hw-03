function SearchBox({ setSearchUser }) { 
  const handleSearchUser = event => {
    setSearchUser(event.target.value.toLowerCase());
  };

  return (
    <form>
      <label>Знайти контакт за іменем</label>
      <input
        type="text"
        onChange={handleSearchUser}
        placeholder="Введіть ім'я"
      />
    </form>
  );
}

export default SearchBox;


