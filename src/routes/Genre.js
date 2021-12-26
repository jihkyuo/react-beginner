import { useState, useEffect, useCallback } from "react";
import Movie from "../components/Movie";
import Header from "../components/Header";
import List from "../components/List";
import { useParams } from "react-router-dom";
import styled from "../css/Genre.module.css";
import Loading from "../components/Loading";

function Genre() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovie] = useState([]);

  const listNums = [...Array(10)].map((_, idx) => idx + 1);

  let { params, urlPage } = useParams();
  const headerTitle = (params) => {
    if (params.includes("minimum")) {
      return "High Rating";
    } else if (params.includes("genre=")) {
      return params.slice(6).toUpperCase();
    }
  };
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
        <Loading />
      ) : (
        <div>
          <Header />

          <main className={styled.movieMain}>
            <header className={styled.movieMain__header}>
              {headerTitle(params)}
            </header>
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
              return (
                <List
                  key={ele}
                  listNum={ele}
                  params={params}
                  urlPage={urlPage}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
export default Genre;
