/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function MovieCard({
  movie: { id, title, poster_path, overview, release_date },
}) {
  const imgUrl = `https://image.tmdb.org/t/p/original/`;
  return (
    <>
      <div className="movieBox">
        <div key={id} className="mainmoovie">
          <img src={imgUrl + poster_path} alt={title} className="urlsMovie" />
          <div className="movieDetails">
            <h4>{title.slice(0, 28)}</h4>
            <p>{overview.slice(0, 60)}...</p>
            <p>{release_date}</p>
            <Link>View Details</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
