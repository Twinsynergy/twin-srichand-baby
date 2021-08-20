/* eslint-disable no-console */
import SbEditable from "storyblok-react";

import ProductPageCarousel from "../ProductPageCarousel";

const ProductSlider = ({ blok }) => (
  <SbEditable content={blok}>
    <div className="products-carousel">
      <ProductPageCarousel slideValues={blok} />
    </div>
  </SbEditable>
);

export default ProductSlider;
