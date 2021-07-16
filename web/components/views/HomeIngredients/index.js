import React from "react";
import PropTypes from "prop-types";
import CarouselIngredients from "../CarouselIngredients";

const HomeIngredients = (props) => {
  const { slideValue } = props;
  return (
    <section className="section relative section-ingredients overflow-hidden pt-10 md:pt-0 xl:pt-20">
      <div className="bg-ingredients relative pb-10 md:pb-20 xl:pb-40 block text-center">
        <div className="container mx-auto px-5 pb-14">
          <div className="text-center">
            <h2 className="text-4xl leading-8 sm:text-6.5xl text-ingredients font-semibold tracking-wide capital">
              Our Active Ingredients
            </h2>
          </div>
        </div>
        <div className="w-full pb-28">
          <CarouselIngredients slideValues={slideValue} />
        </div>
      </div>
    </section>
  );
};

HomeIngredients.propTypes = {
  slideValue: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default HomeIngredients;
