import React from "react";
import Slider from "react-slick";
import "../styles/slick/slick.css";
import "../styles/slick/slick-theme.css";
import "../styles/carousel.css"; //import your own css file here
import blindDate from "../images/blind_date.jpg";
import nepalIdol from "../images/nepal_idol.jpg";
import meriBassai from "../images/meri_bassai.jpg";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false, //hide previous and next buttons
  };

  return (
    <div className="carousel-container slick-list">
      <Slider {...settings}>
        <div>
          <div className="carousel-item">
            <img src={meriBassai} alt="image1" />
            <div className="carousel-item-info">
              <h2>Meri Bassai</h2>
              <button className="watch-now-btn">Watch Now</button>
            </div>
          </div>
        </div>
        <div>
          <div className="carousel-item">
            <img src={blindDate} alt="image2" />
            <div className="carousel-item-info">
              <h2>Blind Date</h2>
              <button className="watch-now-btn">Watch Now</button>
            </div>
          </div>
        </div>

        <div>
          <div className="carousel-item">
            <img src={nepalIdol} alt="image3" />
            <div className="carousel-item-info">
              <h2>Nepal Idol</h2>
              <button className="watch-now-btn">Watch Now</button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
