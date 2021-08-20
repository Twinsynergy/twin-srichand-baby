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
  infinite: true,
  speed: 500,
  autoplay: true,
  arrows: false,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  dots: true,
  slidesPerRow: 1,
  rows: 2,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        rows: 2,
        slidesPerRow: 1,
        adaptiveHeight: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        rows: 1,
        slidesPerRow: 1,
        adaptiveHeight: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        arrows: true,
        dots: true,
        rows: 1,
        slidesPerRow: 1,
        adaptiveHeight: true
      }
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        rows: 1,
        adaptiveHeight: true,
        slidesPerRow: 1
      }
    }
  ]
};

const Carousel = ({ slideValues }) => {
  return (
    <Slider {...settings}>
      {slideValues.map((item, k) => (
        <div className="text-gray-600 body-font" key={k.toString()}>
          <div className="flex xl:flex-row flex-col">
            <div
              className={`w-full relative xl:w-1/2 mb-5 lg:mb-10 xl:mb-0 ${
                k % 2 === 0 ? "xl:order-1" : "xl:order-2"
              }`}>
              <img
                src={item.image}
                className="w-full object-cover object-center mx-auto"
                alt={item.title}
              />
            </div>
            <div
              className={`xl:flex-grow xl:w-1/2 w-full flex flex-col md:items-start md:text-left items-center pt-5 mb-10 xl:mb-5 ${
                k % 2 === 0 ? "xl:order-2 pl-5 pr-5 xl:pl-10" : "xl:order-1 pr-5 xl:pr-10 pl-5"
              }`}>
              <h2 className="sm:text-4xl text-3xl mb-4 w-full flex font-medium text-ingredients">
                <img src="/assets/image/ingredients/list-flower.webp" alt="flower" />
                <span className="ml-2">{item.title}</span>
              </h2>
              <div className="text-xl md:text-2xl leading-relaxed text-left text-ingredients-secondary">
                <div dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
Carousel.propTypes = {
  slideValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  align: PropTypes.oneOf(["top", "center", "bottom"])
};
Carousel.defaultProps = {
  className: "",
  align: "bottom"
};

export default Carousel;
