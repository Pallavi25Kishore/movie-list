import React, {useState} from 'react';
import axios from 'axios';

const AddMovies = ({movies, setMovies}) => {

  const [value, setValue] = useState('');

  /*const handleSubmitAdd = (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);
    var formJson = Object.fromEntries(formData.entries());
    var addName = formJson.addname;
    for (var obj of movies){
      if (obj['title'] === addName) {
        return;
      }
    }
    setMovies([...movies, {title: addName, watched: false, id: addName} ]);
  };*/

  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    axios.post('/api/movies', {title: value})
    .then((response) => {
      console.log('postresponse', response);
      axios.get('/api/movies')
      .then ((response) => {
        console.log('get', response);
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
    })
    setValue('');
  };

  return (
    <form className="add">
      <input
      onChange={handleChange}
      value={value}
      placeholder="Add movie title here"
      type="text"
      name="addname"
      className="add-movie"></input>
        <button onClick={handleClick}>Add</button>
    </form>
  );
};

export default AddMovies;