import React from "react";
import PropTypes from "prop-types";
import { FacebookShareButton, FacebookIcon } from "next-share";
import { FaFacebook } from "react-icons/fa";

const FacebookShare = (props) => {
  const { url, quote, hashtag } = props;
  return (
    <FacebookShareButton url={url} quote={quote} hashtag={hashtag}>
      <FacebookIcon size={48} round />
      <span className="" style={{ display: "none" }}>
        <FaFacebook />
      </span>
    </FacebookShareButton>
  );
};

FacebookShare.propTypes = {
  url: PropTypes.string.isRequired,
  quote: PropTypes.string,
  hashtag: PropTypes.string
};

export default FacebookShare;
