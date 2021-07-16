import React from "react";
import { Layout } from "@/components/container";
import { Jumbotron, PageHeadings, HeadSeo } from "@/components/commons";

const Products = () => {
  return (
    <>
      <HeadSeo siteTitle="Where to buy" desc="" imgSrc="https://srichandbaby.com/" />
      <Layout>
        <Jumbotron className="pt-20 md:pt-36" />
        <section className="section section-where-to-buy pb-24">
          <div className="container mx-auto px-5">
            <PageHeadings align="center" title="Products" />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Products;
