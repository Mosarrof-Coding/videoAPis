import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const API_URL = `https://api.themoviedb.org/3/search/movie?query=`;
const API_KEY = `&api_key=629353605eab6723aee2f62b54183d48`;
function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async (title = "batman") => {
    console.log(`${API_URL}${title}${API_KEY}`);
    const response = await fetch(`${API_URL}${title}${API_KEY}`);
    const data = await response.json();
    setMovies(data.results);
  };
  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <>
      <div className="container">
        <div className="hero">
          <h1>Wellcome</h1>
          <h3>
            Millions of movies, TV shows and people to discover.<br></br>
            Explore now.
          </h3>
          <div className="searchBar">
            <input
              type="text"
              placeholder="Search your favorite Movies"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="movieBtn" onClick={() => searchMovies(search)}>
              Search
            </button>
          </div>
        </div>
        <div>
          {movies.length > 0 ? (
            <div className="movieList">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}></MovieCard>
              ))}
            </div>
          ) : (
            <h2>Waite...</h2>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
