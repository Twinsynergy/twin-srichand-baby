import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
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
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

const BannerCarousel = ({ slideValues, className }) => {
  return (
    <Slider {...settings}>
      {slideValues.map((item, k) => (
        <figure
          className={`w-full relative overflow-hidden relative z-10 align-middle ${className}`}
          key={k.toString()}>
          <picture>
            <source
              srcSet={item.content.image.replace(
                "//a.storyblok.com",
                "https://img2.storyblok.com/425x0/filters:quality(80):format(webp)"
              )}
              media="(max-width: 425px)"
            />
            <source
              srcSet={item.content.image.replace(
                "//a.storyblok.com",
                "https://img2.storyblok.com/1024x0/filters:quality(80):format(webp)"
              )}
              media="(max-width: 1024px)"
            />
            <img
              src={item.content.image.replace(
                "//a.storyblok.com",
                "https://img2.storyblok.com/1920x0/filters:quality(80):format(webp)"
              )}
              className="w-full h-full object-cover object-center pointer-events-none"
              alt={item.content.title}
            />
          </picture>
          <figcaption className="hidden">{item.content.title}</figcaption>
        </figure>
      ))}
    </Slider>
  );
};
BannerCarousel.propTypes = {
  slideValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string
};
BannerCarousel.defaultProps = {
  className: ""
};

export default BannerCarousel;
