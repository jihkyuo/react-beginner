import { useEffect, useState } from "react";
import Header from "../components/Header";
import Swiperjs from "../components/Swiper";
import Loading from "../components/Loading";

import styled from "../css/Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=rating"
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
        <Loading />
      ) : (
        <div>
          <Header />
          <main className={styled.homeMain}>
            <Swiperjs movies={movies} />
          </main>
        </div>
      )}
    </div>
  );
}

export default Home;
