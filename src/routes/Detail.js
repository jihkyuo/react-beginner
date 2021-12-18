import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Movie from "../components/Movie";
import styled from "../css/Detail.module.css";

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
  console.log(movie[0]);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Header />
          <main>
            <img className={styled.detailImg} src={movie[0].background_image} />
            <section className={styled.detailMovie}>
              <img
                src={movie[0].medium_cover_image}
                className={styled.detailMovie__img}
              />
              <div className={styled.detailMovie__column}>
                <div className={styled.detailMovie__title}>
                  {movie[0].title} ({movie[0].year})
                </div>
                <ul className={styled.detailMovie__info}>
                  <li>Rating {movie[0].rating}</li>
                  <li>Runtime {movie[0].runtime}</li>
                  <li>Download {movie[0].download_count}</li>
                  <ul>
                    {movie[0].genres.map((ele, idx) => (
                      <li key={idx} className={styled.detailMovie__genre}>
                        {ele}
                      </li>
                    ))}
                  </ul>
                </ul>
              </div>
            </section>
          </main>
        </div>
      )}
    </div>
  );
}

export default Detail;
