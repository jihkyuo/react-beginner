import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "../css/Movie.module.css";

function Movie({ id, coverImg, title, genres, summary, year, home }) {
  return (
    <section className={styled.movies}>
      <div className={styled.movieImgs}>
        <img src={coverImg} alt={title} className={styled.movieImg} />
      </div>

      <div className={home ? styled.homeMoviesColumn : styled.movieColumn}>
        <h2
          className={
            home ? styled.homeMoviesColumn__title : styled.movieColumn__title
          }
        >
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styled.movieColumn__year}>{year}</h3>
        {home ? null : (
          <p className={styled.movieColumn__summary}>
            {summary
              ? summary.length > 200
                ? `${summary.slice(0, 200)}...`
                : summary
              : null}
          </p>
        )}
        <div className={styled.genre}>
          {genres.map((g) => (
            <li key={g} className={styled.genre__icon}>
              {g}
            </li>
          ))}
        </div>
      </div>
    </section>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string,
  year: propTypes.number,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
