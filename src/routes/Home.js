import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Header from "../components/Header";
import styled from "../css/Home.module.css";

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

  return (
    <div className={styled.homeBody}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Header />
          <main className={styled.homeMain}>
            <div className={styled.grid}>
              {movies.map((movie, idx) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  year={movie.year}
                  summary={movie.summary}
                  genres={movie.genres}
                  home={"home"}
                />
              ))}
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

export default Home;
