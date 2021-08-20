import React from "react";
import PropTypes from "prop-types";

import CarouselReviews from "../CarouselReviews";

const HomeReview = (props) => {
  const { customer } = props;
  return (
    <section className="section section-review relative overflow-hidden pt-20 md:pt-28 md:pb-10">
      <div className="cloud" />
      <div className="rainbow" />
      <div className="container mx-auto">
        <div className="text-center pt-24">
          <h2 className="text-primary text-4xl sm:text-5xl  tracking-wide capital">
            Reviews & Testimonials
          </h2>
        </div>
        <div className="text-gray-600 body-font mt-4">
          <CarouselReviews slideValues={customer} />
        </div>
      </div>
    </section>
  );
};

HomeReview.propTypes = {
  customer: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default HomeReview;
