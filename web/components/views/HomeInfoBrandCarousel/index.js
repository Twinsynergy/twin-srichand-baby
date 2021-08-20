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
  infinite: false,
  speed: 500,
  lazyLoad: true,
  variableWidth: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 426,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }
  ]
};

const HomeInfoBrandCarousel = ({ slideValues }) => {
  return (
    <div className="wave-block">
      <div className="partner container mx-auto px-5 pb-20 text-center">
        <h2 className="mb-4 md:text-4xl text-2xl">
          เชื่อมั่นในเรา ผลิตภัณฑ์จาก SRICHAND Baby <br />
          เราได้รับการรับรองผลิตภัณฑ์จาก
        </h2>
        <div className="xl:w-7/12 lg:w-10/12 mx-auto">
          <Slider {...settings}>
            {slideValues.map((item, k) => (
              <figure key={k.toString()}>
                <img src={item.image} className="mx-auto" alt={item.title} />
                <figcaption className="hidden">{item.title}</figcaption>
              </figure>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
HomeInfoBrandCarousel.propTypes = {
  slideValues: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default HomeInfoBrandCarousel;
