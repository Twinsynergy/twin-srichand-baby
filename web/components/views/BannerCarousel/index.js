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
          <Image
            src={item.content.image.replace("//a.storyblok.com", "https://img2.storyblok.com")}
            alt={item.content.title}
            width={1920}
            height={900}
            layout="responsive"
            placeholder="blur"
          />
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
