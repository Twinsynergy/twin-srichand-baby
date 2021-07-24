import React from "react";
import PropTypes from "prop-types";
import { FacebookShare, TwitterShare } from "@/components/commons";

const SectionShare = (props) => {
  const { slug, title, quote, hashtag } = props;
  return (
    <div className="share-wrapper container mx-auto px-5 pb-48">
      <div className="">
        <h6 className="text-nowrap text-xl my-2">Shared : </h6>
        <ul className="social-content inline-block">
          <li className="social-item inline-block">
            <FacebookShare
              url={`https://srichandbaby.com/${slug}`}
              quote={quote}
              hashtag={hashtag}
            />
          </li>
          <li className="social-item inline-block ml-2">
            <TwitterShare url={`https://srichandbaby.com/${slug}`} title={title} />
          </li>
        </ul>
      </div>
    </div>
  );
};

SectionShare.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  quote: PropTypes.string,
  hashtag: PropTypes.string
};

export default SectionShare;
