import React, {useState} from 'react';

const Search = ({setSearchText}) => {

  const [value, setValue] = useState('');

  /*const handleSubmitSearch = (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);
    var formJson = Object.fromEntries(formData.entries());
    var inputText = formJson.searchtext;
    onSearchTextChange(inputText);
  };*/
  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  }

  const handleClick = (event) => {
    event.preventDefault();
    setSearchText(value);
    setValue('');
  }


  return (
    <form className="search-bar">
      <input
      type="text"
      name = "searchtext"
      placeholder="Search..."
      onChange={handleChange}
      value={value}
      className="search-text"></input>
      <button
      onClick={handleClick}
      className="search-button">Go!</button>
    </form>
  );
};

export default Search;