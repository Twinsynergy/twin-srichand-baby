/* eslint-disable no-console */
import SbEditable from "storyblok-react";

import ProductPageCarousel from "../ProductPageCarousel";

const ProductSlider = ({ blok }) => (
  <SbEditable content={blok}>
    <div className="products-carousel min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible">
      <ProductPageCarousel slideValues={blok} align="bottom" />
    </div>
  </SbEditable>
);

export default ProductSlider;
