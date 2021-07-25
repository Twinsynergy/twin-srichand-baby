import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      aria-hidden="true"
      className={`${className} cursor-pointer`}
      style={{ ...style, display: "block" }}
      onClick={onClick}>
      <BsChevronRight className="text-white" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      aria-hidden="true"
      className={`${className} cursor-pointer`}
      style={{ ...style, display: "block" }}
      onClick={onClick}>
      <BsChevronLeft className="text-white" />
    </div>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false
      }
    }
  ]
};

const Carousel = ({ slideValues }) => {
  return (
    <Slider {...settings}>
      {slideValues.map((item, k) => (
        <div className="review-items p-5" key={k.toString()}>
          <div className="relative">
            <div
              className="profile-img"
              style={{
                backgroundImage: `url("${
                  +item.key % 3 === 0
                    ? "/assets/image/br-review3.png"
                    : +item.key % 2 === 0
                    ? "/assets/image/br-review2.png"
                    : "/assets/image/br-review1.png"
                }")`,
                backgroundSize: "100% 100%"
              }}>
              <div className="avatar-profile">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={141}
                  height={141}
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="quote w-full pt-5 pl-10 md:pl-14 ml-auto mr-0">
              <p className="text-xl md:text-2xl leading-relaxed">{item.reviews}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
Carousel.propTypes = {
  slideValues: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Carousel;
