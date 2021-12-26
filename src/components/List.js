import { Link } from "react-router-dom";

import styled from "../css/Genre.module.css";

function List({ listNum, params, urlPage }) {
  return (
    <Link
      className={+urlPage === listNum ? styled.listNum : null}
      to={`/movie/${params}/${listNum}`}
    >
      {listNum}
    </Link>
  );
}

export default List;
