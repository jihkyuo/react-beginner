// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Navigation,
  Autoplay,
  EffectCoverflow,
} from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import styled from "../css/Swiper.module.css";

import Movie from "./Movie";

function Swiperjs({ movies }) {
  SwiperCore.use([Pagination, Navigation, Autoplay, EffectCoverflow]);
  return (
    <Swiper
      className={styled.swiper__wrapper}
      spaceBetween={20}
      slidesPerView={3}
      grabCursor={true}
      centeredSlides={true}
      effect={"coverflow"}
      autoplay={{ delay: 1000 }}
      navigation
      loop={true}
      pagination={{
        dynamicBullets: true,
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {movies.map((movie, idx) => (
        <SwiperSlide key={movie.id}>
          <Movie
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            year={movie.year}
            summary={movie.summary}
            genres={movie.genres}
            home={"home"}
          />{" "}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Swiperjs;
