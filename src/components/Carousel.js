import React from "react";
import Slider from "react-slick";
import "../styles/slick/slick.css";
import "../styles/slick/slick-theme.css";
import "../styles/carousel.css"; //import your own css file here
import blindDate from "../images/blind_date.jpg";
import nepalIdol from "../images/nepal_idol.jpg";
import singhadurbar from "../images/singhadurbar.jpg";
import meriBassai from "../images/meri_bassai.jpg";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <div className="carousel-item">
            <img src={meriBassai} alt="image1" />
            <div className="carousel-item-info">
              <h2>Title</h2>
              <button className="watch-now-btn">Watch Now</button>
            </div>
          </div>
        </div>
        <div>
          <div className="carousel-item">
            <img src={blindDate} alt="image2" />
            <div className="carousel-item-info">
              <h2>Title</h2>
              <button className="watch-now-btn">Watch Now</button>
            </div>
          </div>
        </div>
        <div>
          <div className="carousel-item">
            <img src={singhadurbar} alt="image3" />
            <div className="carousel-item-info">
              <h2>Title</h2>
              <button className="watch-now-btn">Watch Now</button>
            </div>
          </div>
        </div>
        <div>
          <div className="carousel-item">
            <img src={nepalIdol} alt="image3" />
            <div className="carousel-item-info">
              <h2>Title</h2>
              <button className="watch-now-btn">Watch Now</button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
