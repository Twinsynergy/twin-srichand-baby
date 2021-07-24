import React from "react";
import PropTypes from "prop-types";
import { TwitterShareButton, TwitterIcon } from "next-share";
import { FaTwitter } from "react-icons/fa";

const TwitterShare = (props) => {
  const { url, title } = props;
  return (
    <TwitterShareButton url={url} title={title}>
      <TwitterIcon size={48} round />
      <span className="" style={{ display: "none" }}>
        <FaTwitter />
      </span>
    </TwitterShareButton>
  );
};

TwitterShare.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default TwitterShare;
