import React from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ className, children }) => {
  return (
    <div
      className={`container-fluid bg-grey-light font-sans leading-normal tracking-normal ${className}`}>
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

Layout.defaultProps = {
  className: ""
};

export default Layout;
