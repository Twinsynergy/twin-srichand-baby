import React from "react";
import Link from "next/link";
import { Layout } from "@/components/container";
import { HeadSeo } from "@/components/commons";
import { FilterContent, ProductCard } from "@/components/views";
import { getAllContentFromSlide, getAllProducts } from "@/utils/storyblok";

const Products = (props) => {
  const { story, products } = props;
  return (
    <>
      <HeadSeo
        siteTitle="Products"
        desc="สินค้าทั้งหมดใน Srichand baby"
        siteUrl="https://srichandbaby.twinsynergy.co.th/products"
        imgSrc="https://srichandbaby.twinsynergy.co.th/assets/image/pagetitle/banner-product.webp"
        imgPreload="/assets/image/pagetitle/banner-product.webp"
      />
      <Layout>
        <section className="section section-hero mx-auto bg-white">
          <div
            className="page-title-area bg-two"
            style={{
              backgroundImage: "url(/assets/image/pagetitle/banner-product.webp)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center top"
            }}>
            <div className="d-table">
              <div className="d-table-cell-">
                <div className="text-center text-white">
                  <h2 className="text-4xl md:text-8xl">ผลิตภัณฑ์</h2>
                  <h1 className="text-2xl md:text-3xl">ศรีจันทร์เบบี้</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-where-to-buy pb-24">
          <FilterContent
            title="Products"
            optFilter={[
              <li aria-hidden="true" className="inline-block">
                <Link href="/products/desc">
                  <a>ใหม่สุด</a>
                </Link>
              </li>,
              <li className="inline-block px-1"> | </li>,
              <li aria-hidden="true" className="inline-block">
                <Link href="/products/asc">
                  <a>เก่าสุด</a>
                </Link>
              </li>
            ]}
          />
          <div className="content-wrapper text-gray-600 body-font">
            <div className="container px-5 mx-auto pb-0 md:pb-24">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {products.map((item) => (
                  <ProductCard
                    key={item.uuid}
                    featureProduct={item.content.feature_product.filename}
                    slug={item.slug}
                    name={item.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export async function getStaticProps(context) {
  const { stories } = await getAllContentFromSlide();
  const products = await getAllProducts();
  return {
    props: {
      story: stories || [],
      preview: context.preview || false,
      products: products.stories
    },
    revalidate: 10
  };
}

export default Products;
