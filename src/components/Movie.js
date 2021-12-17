import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "../css/Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  console.log(coverImg);
  return (
    <section className={styled.movies}>
      <div>
        <img src={coverImg} alt={title} />
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>

        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </div>
    </section>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
