import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import Header from "../components/Header";
import styled from "../css/Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [slide, setSlide] = useState(0);
  const [slideNum, setSlideNum] = useState(0);

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=3&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setSlideNum(json.data.limit);
    setLoading(false);
  };

  const slideLimit = Math.floor(slideNum / 3);
  const onClickLeft = () => {
    slide === 0 ? setSlide((cur) => cur) : setSlide((cur) => cur - 1);
  };
  const onClickRight = () => {
    slide === slideLimit ? setSlide((cur) => cur) : setSlide((cur) => cur + 1);
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
            <header className={styled.homeHeader}>
              <Link to={`/movie/minimum_rating=8/1`}>Hight Rating</Link>
            </header>
            <div
              className={styled.grid}
              style={{ transform: `translateX(${-78 * slide}em)` }}
            >
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
            <div className={styled.slideBtn}>
              <div>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className={styled.slideBtn__left}
                  onClick={onClickLeft}
                  id="left"
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={styled.slideBtn__right}
                  onClick={onClickRight}
                  id="right"
                />
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

export default Home;
