import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Romance() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch("https://yts.mx/api/v2/list_movies.json?genre=romance")
    ).json();
    setMovie(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Romance;
