import React from "react";
import PropTypes from "prop-types";

const FeatureTitleSection = (props) => {
  const { title, align, className } = props;
  return (
    <div
      className={
        align === "center" ? `${className} lg:text-${align}` : `${className} lg:text-${align}`
      }>
      <h1 className="text-xl sm:text-2xl text-primary font-semibold tracking-wide uppercase">
        ศรีจันทร์ เบบี้
      </h1>
      <h2 className="mt-2 mb-4 text-3xl leading-8 font-semibold tracking-tight tracking-wide text-gray-500 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
};

FeatureTitleSection.propTypes = {
  title: PropTypes.string.isRequired,
  align: PropTypes.oneOf(["center", "right", "left"]),
  className: PropTypes.string
};
FeatureTitleSection.defaultProps = {
  className: "py-10 sm:px-5"
};

export default FeatureTitleSection;
