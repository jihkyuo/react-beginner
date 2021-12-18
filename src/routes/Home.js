import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styled from "../css/Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=3&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  // console.log(movies[0].genres);

  return (
    <div className={styled.homeBody}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styled.grid}>
          <h1>
            <Link to={`/movie/genre=romance`}>로맨스물</Link>
          </h1>
          {movies.map((movie, idx) => (
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

export default Home;
