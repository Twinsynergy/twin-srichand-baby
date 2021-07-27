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
      {/* Font */}
      <link rel="preload" href="/assets/fonts/psl114.ttf" as="font" crossOrigin="anonymous" />
      <link rel="preload" href="/assets/fonts/PSL114pro_1.ttf" as="font" crossOrigin="anonymous" />
      <link rel="preload" href="/assets/fonts/PSL116pro.ttf" as="font" crossOrigin="anonymous" />
      <link rel="preload" href="/assets/fonts/PSL156Pro.otf" as="font" crossOrigin="anonymous" />
      {/* Fav icon */}
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
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
  imgSrc: "https://srichandbaby.twinsynergy.co.th/assets/image/pagetitle/banner-head.jpg"
};

export default HeadSeo;
