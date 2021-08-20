import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import ProductCardStyle from "./style";

const ProductCard = (props) => {
  const { slug, featureProduct, name, onSlide } = props;
  return (
    <ProductCardStyle style={{ margin: onSlide ? "50px 30px 0 30px" : "0" }}>
      <Link href="/products/[slug]" as={`/products/${slug}`}>
        <div className="product-wrapper cursor-pointer block relative bg-old-lace border-8 border-old-lace hover:border-primary rounded-md">
          <div className="product_image flex justify-center items-center">
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet={featureProduct.replace(
                  "//a.storyblok.com",
                  "//img2.storyblok.com/0x300/filters:quality(80):format(webp)"
                )}
              />
              <img
                alt={name}
                src={featureProduct.replace(
                  "//a.storyblok.com",
                  "//img2.storyblok.com/0x400/filters:quality(80):format(webp)"
                )}
              />
            </picture>
          </div>
        </div>
      </Link>
      <h2 className="text-2xl font-medium text-center mt-4">
        <Link href="/products/[slug]" as={`/products/${slug}`}>
          {name}
        </Link>
      </h2>
    </ProductCardStyle>
  );
};

ProductCard.propTypes = {
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  featureProduct: PropTypes.string,
  onSlide: PropTypes.bool
};

ProductCard.defaultProps = {
  onSlide: false
};

export default ProductCard;
