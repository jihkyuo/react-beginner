import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Swiperjs from "../components/Swiper";

import styled from "../css/Home.module.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronLeft,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";

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
  console.log(movies);
  return (
    <div className={styled.homeBody}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Header />
          <main className={styled.homeMain}>
            <header className={styled.homeHeader}>
              <Link to={`/movie/minimum_rating=8/1`}>Hight Rating</Link>
            </header>
            <Swiperjs movies={movies} />
          </main>
        </div>
      )}
    </div>
  );
}

export default Home;
