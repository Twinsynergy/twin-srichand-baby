import React from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ className, children }) => {
  return (
    <div className="container-fluid bg-grey-light font-sans leading-normal tracking-normal">
      <Header />
      <main className={`relative ${className}`}>{children}</main>
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
