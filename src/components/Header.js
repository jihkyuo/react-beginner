import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "../css/Header.module.css";

function Header() {
  const [scroll, setScroll] = useState(false);

  const scrolling = (e) => {
    if (e.target.scrollingElement.scrollTop < 100) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };
  window.addEventListener("scroll", scrolling);

  useEffect(() => {
    return setScroll;
  }, []);
  return (
    <div>
      <header
        className={`${styled.header} ${
          scroll ? styled.header__scroll : styled.header
        }`}
      >
        <div className={styled.headerColumn}>
          <Link to="/">HOME</Link>
        </div>
        <div className={styled.headerColumn}>
          <div className={styled.headerColumn__item}>
            <Link to={`/movie/minimum_rating=8/1`}>Hight Rating</Link>
          </div>
          <div className={styled.headerColumn__item}>
            <Link to={`/movie/genre=romance/1`}>Romance</Link>
          </div>
          <div className={styled.headerColumn__item}>
            <Link to={`/movie/genre=drama/1`}>Thriller</Link>
          </div>
          <div className={styled.headerColumn__item}>
            <Link to={`/movie/genre=comedy/1`}>Animation</Link>
          </div>
        </div>
        <div className={styled.headerColumn}>아이콘</div>
      </header>
    </div>
  );
}
export default Header;
