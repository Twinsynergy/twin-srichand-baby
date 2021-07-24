/* eslint-disable no-console */
import React from "react";
import SbEditable from "storyblok-react";
import { render } from "storyblok-rich-text-react-renderer";
import { useRouter } from "next/router";
import { Breadcrumb } from "@/components/commons";
import { SingleProductCarousel } from "@/components/views";
import styled from "styled-components";

const RichTextBlock = styled.div`
  p {
    margin-bottom: 45px;
    /* text-xl */
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  h3 {
    margin-bottom: 20px;
  }
  ul {
    list-style: disc;
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
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="container products mx-auto px-5 pt-10">
        <h1 className="tracking-wide text-primary">ผลิตภัณฑ์</h1>
        <Breadcrumb postTitle="SRICHAND BABY - NEW BORN POWDER" routes={routes} />
        <div className="product-content md:pt-5 pb-10">
          {blok.product_gallery.length !== 0 ? (
            <div className="product-slide my-10 border-2 border-gray-300">
              <div className="flex md:flex-row flex-col md:items-center">
                <div className="w-full md:w-6/12 border-b-2 md:border-b-0 md:border-r-2 border-gray-300">
                  <SingleProductCarousel slideValues={blok.product_gallery} />
                </div>
                <div className="w-full md:w-6/12 md:pl-5 md:mb-0 py-10 md:py-0 px-5 text-center">
                  <div className="product-header">
                    <h1 className="text-xl lg:text-2xl text-primary tracking-wide uppercase">
                      Srichand baby
                    </h1>
                    <h2 className="mb-2 lg:mb-4 text-3xl lg:text-4xl leading-8 tracking-tight tracking-wide">
                      {blok.title}
                    </h2>
                  </div>
                  <div className="product-value ">
                    {blok.net_weight && (
                      <p className="text-gray-400 text-xl lg:text-2xl">
                        ปริมาณสุทธิ {`${blok.net_weight} ${blok.net_weight_unit}`}
                      </p>
                    )}
                    <p className="product-price text-gray-400 text-3xl lg:text-4xl">
                      ราคา {blok.price !== "" ? blok.price : "-"} บาท
                    </p>
                    <div className="text-center mt-2 lg:mt-4">
                      <button
                        type="button"
                        className="py-1 lg:py-2 px-6 lg:px-8 text-xl lg:text-2xl rounded-full bg-primary text-white"
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
          {blok.certifications.filename !== "" && (
            <div className="product-certificate text-center pt-14 pb-20">
              <h2 className="capitalize">certifications</h2>
              <img
                className="w-full my-10"
                src={blok.certifications.filename.replace(
                  "//a.storyblok.com",
                  "https://img2.storyblok.com/0x200/filters:quality(80):format(webp)"
                )}
                alt={blok.certifications.alt ? blok.certifications.alt : blok.title}
              />
            </div>
          )}
          <div className="product-description pb-20">
            <div className="flex md:flex-row flex-col">
              <div className="w-full md:w-1/3 mb-20 md:mb-0">
                <img
                  className="w-full object-cover object-center rounded"
                  alt={blok.feature_product.alt ? blok.feature_product.alt : blok.title}
                  src={blok.feature_product.filename.replace(
                    "//a.storyblok.com",
                    "https://img2.storyblok.com/0x200/filters:quality(80):format(webp)"
                  )}
                />
              </div>
              <div className="w-full md:w-2/3 md:pl-7 md:items-start">
                <h2 className="title-font uppercase sm:text-4xl text-3xl mb-5 font-medium text-gray-900">
                  Product Detail
                </h2>
                <div className="product-description-content">
                  <RichTextBlock>{render(blok.description)}</RichTextBlock>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="title-font uppercase sm:text-4xl text-3xl mb-10 font-medium text-gray-900">
              Active Ingredients
            </h2>
            <div className="products-active-ingredients">
              <RichTextBlock>{render(blok.active_ingredients)}</RichTextBlock>
            </div>
          </div>
        </div>
      </div>
    </SbEditable>
  );
};

export default SingleProduct;
