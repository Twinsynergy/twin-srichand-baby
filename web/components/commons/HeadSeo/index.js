import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

const HeadSeo = ({ siteName, siteTitle, desc, imgSrc, siteUrl }) => {
  return (
    <Head>
      <title>
        {siteTitle} - {siteName}{" "}
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="robots" content="index, follow" />
      <meta name="title" content={siteTitle} />
      <meta name="description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={imgSrc} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content={imgSrc} />
    </Head>
  );
};

HeadSeo.propTypes = {
  siteName: PropTypes.string,
  siteTitle: PropTypes.string,
  desc: PropTypes.string,
  imgSrc: PropTypes.string,
  siteUrl: PropTypes.string
};
HeadSeo.defaultProps = {
  siteTitle: "",
  desc: "",
  siteName: "Srichand Baby",
  imgSrc: "https://srichandbaby.com/assets/image/pagetitle/banner-head.jpg"
};

export default HeadSeo;