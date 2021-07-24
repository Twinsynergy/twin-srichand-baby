import React, { Fragment } from "react";
import PropTypes from "prop-types";

const FilterContent = (props) => {
  const { title, optFilter } = props;
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col items-center md:flex-row py-10 lg:py-20">
        <h2 className="block text-3xl sm:text-5xl text-primary">{title}</h2>
        <div className="filter ml-auto text-xl text-gray-500">
          เรียงโดย :
          <ul className="inline-block ml-2">
            {optFilter &&
              optFilter.length > 0 &&
              optFilter.map((item, index) => <Fragment key={index.toString()}>{item}</Fragment>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

FilterContent.propTypes = {
  optFilter: PropTypes.oneOfType([PropTypes.array, PropTypes.node])
};

export default FilterContent;
