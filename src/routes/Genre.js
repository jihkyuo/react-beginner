import { useState, useEffect, useCallback } from "react";
import Movie from "../components/Movie";
import Header from "../components/Header";
import List from "../components/List";
import { useParams } from "react-router-dom";
import styled from "../css/Genre.module.css";

function Genre() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovie] = useState([]);

  const listNums = [...Array(10)].map((_, idx) => idx + 1);

  let { params, urlPage } = useParams();

  const getMovie = useCallback(async () => {
    setLoading(true);
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?${params}&sort_by=rating&page=${urlPage}`
      )
    ).json();
    setMovie(json.data.movies);
    setLoading(false);
  }, [params, urlPage]);

  useEffect(() => {
    getMovie();
  }, [getMovie, urlPage, params]);

  return (
    <div className={styled.homeBody}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Header />

          <main>
            <div className={styled.grid}>
              {movies.map((movie, idx) => {
                return (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    year={movie.year}
                    summary={movie.summary}
                    genres={movie.genres}
                  />
                );
              })}
            </div>
          </main>
          <div className={styled.pages}>
            {listNums.map((ele) => {
              return <List key={ele} listNum={ele} params={params} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
export default Genre;
