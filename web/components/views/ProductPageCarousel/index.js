/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ProductCard from "../ProductCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      aria-hidden="true"
      className={`${className} cursor-pointer`}
      style={{ ...style, display: "block" }}
      onClick={onClick}>
      <BsChevronRight className="text-primary" />
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
      <BsChevronLeft className="text-primary" />
    </div>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false
      }
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
};

const ProductPageCarousel = ({ slideValues }) => {
  return (
    <Slider {...settings}>
      {slideValues.map((item) => (
        <ProductCard
          key={item.uuid}
          className="w-full px-3"
          slug={item.slug}
          featureProduct={item.content.feature_product.filename.replace(
            "//a.storyblok.com",
            "https://img2.storyblok.com/0x500/filters:quality(80):format(webp)"
          )}
          name={item.name}
        />
      ))}
    </Slider>
  );
};
ProductPageCarousel.propTypes = {
  slideValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string
};
ProductPageCarousel.defaultProps = {
  className: ""
};

export default ProductPageCarousel;
