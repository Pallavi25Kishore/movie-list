import React from 'react';

const AddMovies = ({movies, setMovies}) => {

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);
    var formJson = Object.fromEntries(formData.entries());
    var addName = formJson.addname;
    setMovies([...movies, {title: addName}]);
  };

  return (
    <form className="add" method="post" onSubmit={handleSubmitAdd}>
      <input
      placeholder="Add movie title here"
      type="text"
      name="addname"
      className="add-movie"></input>
        <button
        type="submit">Add</button>
    </form>
  );
};

export default AddMovies;