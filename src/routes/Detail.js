import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie([json.data.movie]);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);
  console.log(movie);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>
            <Link to="/">HOME</Link>
          </h1>
          {movie.map((ele) => (
            <Movie
              key={ele.id}
              id={ele.id}
              coverImg={ele.medium_cover_image}
              title={ele.title}
              summary={ele.description_intro}
              genres={ele.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Detail;
