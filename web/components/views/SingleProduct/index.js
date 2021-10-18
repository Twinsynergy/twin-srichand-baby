/* eslint-disable no-console */
import React, { useEffect, useState } from "react";

import ActiveinGredients from "./ActiveinGredients";
import { Breadcrumb } from "@/components/commons";
import ProductCertificate from "./ProductCertificate";
import SbEditable from "storyblok-react";
import { SingleProductCarousel } from "@/components/views";
import { render } from "storyblok-rich-text-react-renderer";
import styled from "styled-components";
import { useRouter } from "next/router";

const RichTextBlock = styled.div`
  p {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  h3 {
    margin-bottom: 20px;
    text-decoration: underline;
  }
  ul {
    list-style: disc;
    li {
      &::marker {
        color: #ea4b6b;
      }
    }
  }
  ol {
    list-style: decimal;
  }
  ul,
  ol {
    padding-left: 30px;
    margin-bottom: 45px;
    p {
      margin-bottom: 5px;
    }
  }
`;

const SingleProduct = ({ blok, routes }) => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);
  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split("/");
      if (linkPath.includes("asc")) {
        linkPath.splice(2);
      }
      if (linkPath.includes("desc")) {
        linkPath.splice(2);
      }
      linkPath.shift();

      const pathArray = linkPath.map((paths, i) => {
        return { breadcrumb: paths, href: `/${linkPath.slice(0, i + 1).join("/")}` };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="container products mx-auto px-5 pt-10">
        <h1 className="tracking-wide text-primary">ผลิตภัณฑ์</h1>
        <Breadcrumb postTitle={blok.title} routes={breadcrumbs} />
        <div className="product-content md:pt-5 pb-10">
          {blok.product_gallery.length !== 0 ? (
            <div className="product-slide my-10 border-4 border-older-lace">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-3 relative border-b-4 lg:border-b-0 lg:border-r-4 border-older-lace">
                  <img
                    src="/assets/image/duo-star.webp"
                    alt="duo star"
                    className="absolute z-2 w-14 md:w-24 -top-4 -left-4 md:-top-6 md:-left-6"
                  />
                  <SingleProductCarousel slideValues={blok.product_gallery} />
                </div>
                <div className="lg:col-span-2 lg:p-8 p-4 flex flex-col justify-between">
                  <div className="product-header">
                    <h1 className="text-3xl leading-7 xl:text-4xl">{blok.title}</h1>
                    {blok.net_weight && (
                      <p className="text-primary text-xl mt-0">
                        ปริมาณสุทธิ {`${blok.net_weight} ${blok.net_weight_unit}`}
                      </p>
                    )}
                  </div>
                  <div className="product-footer">
                    <p className="product-price text-3xl lg:text-4xl">
                      ราคา {blok.price !== "" ? blok.price : "-"} บาท
                    </p>
                    <div className="text-center mt-2">
                      <button
                        type="button"
                        className="w-full py-2 lg:py-4 text-xl lg:text-2xl rounded-full bg-primary text-white"
                        onClick={() => router.push("/where-to-buy")}>
                        Shop now !
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {blok.certifications.filename !== "" && (
        <ProductCertificate className="product-certificate text-center flex flex-col content-center justify-center">
          <div className="container mx-auto px-5">
            <h2 className="capitalize">certifications</h2>
            <img
              className="w-full my-10"
              src={blok.certifications.filename.replace(
                "//a.storyblok.com",
                "//img2.storyblok.com/0x200/filters:quality(80):format(webp)"
              )}
              alt={blok.certifications.alt ? blok.certifications.alt : blok.title}
            />
          </div>
        </ProductCertificate>
      )}
      <div className="product-description mb-14">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 flex justify-center">
              <img
                style={{maxHeight: '400px'}}
                alt={blok.feature_product.alt ? blok.feature_product.alt : blok.title}
                src={blok.feature_product.filename.replace(
                  "//a.storyblok.com",
                  "//img2.storyblok.com/465x0/filters:quality(80):format(webp)"
                )}
              />
            </div>
            <div className="lg:col-span-3">
              <h2 className=" uppercase sm:text-4xl text-3xl mb-5 font-medium text-ingredients">
                Product Detail
              </h2>
              <div className="product-description-content text-ingredients-secondary">
                <RichTextBlock>{render(blok.description)}</RichTextBlock>
              </div>
              {blok.text_highlight && (
                <div className="bg-old-lace p-4 text-secondary rounded-xl text-center"> {blok.text_highlight}</div>
              )}
              
            </div>
          </div>
        </div>
      </div>
      <ActiveinGredients className="bg-old-lace pb-10">
        <div className="container mx-auto px-5">
          <h2 className="uppercase sm:text-4xl text-3xl mb-10 font-medium text-gray-900">
            Active Ingredients
          </h2>
          <div className="products-active-ingredients">
            <RichTextBlock>{render(blok.active_ingredients)}</RichTextBlock>
          </div>
        </div>
      </ActiveinGredients>
    </SbEditable>
  );
};

export default SingleProduct;
