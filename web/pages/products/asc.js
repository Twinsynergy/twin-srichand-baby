import React from "react";
import Link from "next/link";
import { Layout } from "@/components/container";
import { HeadSeo } from "@/components/commons";
import { ProductSlider, FilterContent, ProductCard } from "@/components/views";
import { getProductMainPageSlide, getAllProductsAsc } from "@/utils/storyblok";

const Products = (props) => {
  const { story, products } = props;
  return (
    <>
      <HeadSeo
        siteTitle="Products"
        desc="สินค้าทั้งหมดใน Srichand baby"
        siteUrl="https://srichandbaby.twinsynergy.co.th/products"
      />
      <Layout>
        {story && <ProductSlider blok={story} />}
        <section className="section section-where-to-buy pb-24">
          <FilterContent
            title="Products"
            optFilter={[
              <li aria-hidden="true" className="inline-block">
                <Link href="/products/desc">
                  <a>ใหม่สุด</a>
                </Link>
              </li>,
              <li aria-hidden="true" className="inline-block">
                <Link href="/products/asc">
                  <a>เก่าสุด</a>
                </Link>
              </li>
            ]}
          />
          <div className="content-wrapper text-gray-600 body-font">
            <div className="container px-5 mx-auto pb-0 md:pb-24">
              <div className="flex flex-wrap -m-4">
                {products.map((item) => (
                  <ProductCard
                    className="lg:w-1/3 md:w-1/2 p-4 w-full"
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
  const { stories } = await getProductMainPageSlide();
  const products = await getAllProductsAsc();
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
