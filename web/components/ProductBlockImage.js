/* eslint-disable no-console */
import React from "react";
import SbEditable from "storyblok-react";

const ProductBlockImage = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <img
        className="object-cover object-center w-full h-full md:mx-auto block"
        src={blok.images.filename}
        alt={blok.images.alt}
      />
    </SbEditable>
  );
};

export default ProductBlockImage;
