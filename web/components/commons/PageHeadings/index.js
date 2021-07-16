import React from "react";
import PropTypes from "prop-types";

const PageHeadings = (props) => {
  const { title, align, className } = props;
  return (
    <div
      className={
        align === "center" ? `${className} lg:text-${align}` : `${className} lg:text-${align}`
      }>
      <h1 className="text-xl sm:text-2xl text-srichand-red font-semibold tracking-wide uppercase">
        ศรีจันทร์ เบบี้
      </h1>
      <h2 className="mt-2 mb-4 text-3xl leading-8 font-semibold tracking-tight tracking-wide text-gray-500 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
};

PageHeadings.propTypes = {
  title: PropTypes.string.isRequired,
  align: PropTypes.oneOf(["center", "right", "left"]),
  className: PropTypes.string
};
PageHeadings.defaultProps = {
  className: "py-10 lg:py-20 px-5"
};

export default PageHeadings;
