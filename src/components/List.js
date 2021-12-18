import { Link } from "react-router-dom";

function List({ listNum, params }) {
  return <Link to={`/movie/${params}/${listNum}`}>{listNum}</Link>;
}

export default List;
