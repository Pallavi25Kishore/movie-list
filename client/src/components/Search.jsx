import React from 'react';

const Search = ({searchText, onSearchTextChange}) => {

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);
    var formJson = Object.fromEntries(formData.entries());
    var inputText = formJson.searchtext;
    onSearchTextChange(inputText);
  };

  return (
    <form className="search-bar" method="post" onSubmit={handleSubmitSearch}>
      <input
      type="text"
      name = "searchtext"
      placeholder="Search..."
      className="search-text"></input>
      <button
      type="submit"
      className="search-button">Go!</button>
    </form>
  );
};

export default Search;