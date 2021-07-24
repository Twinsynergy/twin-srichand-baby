import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const FadeInSection = (props) => {
  const { className, children } = props;
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          // header.classList.add("scrolled");
          setVisible(false);
        } else {
          // header.classList.remove("scrolled");
          setVisible(true);
          observer.unobserve(domRef.current);
        }
      });
    });
    if (domRef) observer.observe(domRef.current);

    // return () => observer.disconnect();
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? `is-visible ${className}` : className}`}>
      {children}
    </div>
  );
};

FadeInSection.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
FadeInSection.defaultProps = {
  className: ""
};

export default FadeInSection;
