/* eslint-disable no-console */
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import SbEditable from "storyblok-react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import DynamicComponent from "../../DynamicComponent";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      aria-hidden="true"
      className={`${className} cursor-pointer`}
      style={{ ...style, display: "block" }}
      onClick={onClick}>
      <BsChevronRight className="text-black" />
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
      <BsChevronLeft className="text-black" />
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
  prevArrow: <SamplePrevArrow />,
  dotsClass: "product-custom-dots absolute bottom-5 left-1/2",
  appendDots: (dots) => {
    return (
      <div className="tw-image-slider-progressbar flex flex-row justify-center">
        {dots.map((item) => (
          <Fragment key={item.key}>
            {item.props.className === "slick-active" ? (
              <span className="current mr-2">
                {item.props.className === "slick-active" ? +item.key + 1 : ""}
              </span>
            ) : (
              ""
            )}
          </Fragment>
        ))}
        / <span className="max ml-1">{dots.length}</span>
      </div>
    );
  },
  customPaging: (i) => <>{i + 1}</>
};

const SingleProductCarousel = ({ slideValues }) => {
  return (
    <SbEditable content={slideValues}>
      <Slider {...settings}>
        {slideValues.map((item) => (
          <DynamicComponent key={item._uid} blok={item} />
        ))}
      </Slider>
    </SbEditable>
  );
};
SingleProductCarousel.propTypes = {
  slideValues: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SingleProductCarousel;
