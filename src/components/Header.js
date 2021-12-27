import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "../css/Header.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

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
          <Link to="/">
            <FontAwesomeIcon icon={faCompactDisc} className={styled.homeIcon} />

            <span>ne FLIX</span>
          </Link>
        </div>
        <div className={styled.headerColumn}>
          <div className={styled.headerColumn__item}>
            <Link to={`/movie/minimum_rating=8/1`}>Hight Rating</Link>
          </div>
          <div className={styled.headerColumn__item}>
            <Link to={`/movie/genre=romance/1`}>Romance</Link>
          </div>
          <div className={styled.headerColumn__item}>
            <Link to={`/movie/genre=drama/1`}>Drama</Link>
          </div>
          <div className={styled.headerColumn__item}>
            <Link to={`/movie/genre=comedy/1`}>Comedy</Link>
          </div>
        </div>
        <div className={styled.headerColumn}>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} className={styled.headerIcon} />
          </a>
          <a
            href="https://twitter.com/?lang=ko"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className={styled.headerIcon} />
          </a>
        </div>
      </header>
    </div>
  );
}
export default Header;
