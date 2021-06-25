import React, { useState } from "react";

function SearchMovies() {
  //tracking states - input query, movies using hooks

  const [query, setQuery] = useState(""); //tracks 2 states
  const [movies, setMovies ] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const query = "Jurassic Park";

    //url that we are using to talk to the movie db
    const url = `https://api.themoviedb.org/3/movie/550?
    api_key=c61b5f3b1f2166f629feaed0228b7bb2&language=en-US&query=${query}&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      console.log(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
      <>
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e Jurassic Park"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <button className="button" type="submit">
        Search
      </button>
    </form>
    <div className="card-list">
       
    </div>
    </>
  );
}

export default SearchMovies;
