import { Link } from "react-router-dom";
import styled from "../css/Header.module.css";

function Header() {
  return (
    <div>
      <header className={styled.header}>
        <div className={styled.headerColumn}>
          <Link to="/">HOME</Link>
        </div>
        <div className={styled.headerColumn}>
          <div className={styled.headerColumn__item}>
            <Link to={`/movie/minimum_rating=8/1`}>높은평점</Link>
          </div>
          <div className={styled.headerColumn__item}>
            <Link to={`/movie/genre=romance/1`}>로맨스</Link>
          </div>
          <div className={styled.headerColumn__item}>
            <Link to={`/movie/genre=drama/1`}>드라마</Link>
          </div>
          <div className={styled.headerColumn__item}>
            <Link to={`/movie/genre=comedy/1`}>코메디</Link>
          </div>
        </div>
        <div className={styled.headerColumn}>아이콘</div>
      </header>
    </div>
  );
}
export default Header;
