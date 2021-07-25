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
  slidesToShow: 6,
  slidesToScroll: 6,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        dots: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
        dots: true
      }
    },
    {
      breakpoint: 736,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
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

const HomeInfoBrandCarousel = ({ slideValues }) => {
  return (
    <div className="wave-block">
      <div className="partner container mx-auto px-5 md:pb-10 text-center">
        <h2 className="mb-4">
          เชื่อมั่นในเรา <span className="whitespace-nowrap">Srichand Baby</span>
        </h2>
        <Slider {...settings}>
          {slideValues.map((item, k) => (
            <figure
              className="w-full overflow-hidden relative z-10 align-middle"
              key={k.toString()}>
              <img src={item.image} className="mx-auto pointer-events-none" alt={item.title} />
              <figcaption className="hidden">{item.title}</figcaption>
            </figure>
          ))}
        </Slider>
      </div>
    </div>
  );
};
HomeInfoBrandCarousel.propTypes = {
  slideValues: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default HomeInfoBrandCarousel;
