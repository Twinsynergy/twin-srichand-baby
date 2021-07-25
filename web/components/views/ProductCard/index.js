import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const ProductCard = (props) => {
  const { slug, featureProduct, name, className } = props;
  return (
    <div className={className}>
      <Link href="/products/[slug]" as={`/products/${slug}`}>
        <a className="block relative h-72 md:h-72 xl:h-96 rounded overflow-hidden">
          <img
            alt={name}
            className="object-cover object-center w-full h-full md:mx-auto block"
            src={featureProduct.replace(
              "//a.storyblok.com",
              "//img2.storyblok.com/358x446/filters:quality(80):format(webp)"
            )}
          />
        </a>
      </Link>
      <div className="mt-4">
        <h2 className="text-2xl text-center font-medium">
          <Link href="/products/[slug]" as={`/products/${slug}`}>
            {name}
          </Link>
        </h2>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  slug: PropTypes.string.isRequired,
  featureProduct: PropTypes.string,
  name: PropTypes.string.isRequired
};

ProductCard.defaultProps = {
  className: "lg:w-1/3 md:w-1/2 p-4 w-full"
};

export default ProductCard;
