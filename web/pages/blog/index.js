import React from "react";
import { Layout } from "@/components/container";
import { HeadSeo, Jumbotron, PageHeadings } from "@/components/commons";

const Blog = () => {
  return (
    <>
      <HeadSeo siteTitle="Where to buy" desc="" imgSrc="https://srichandbaby.com/" />
      <Layout>
        <Jumbotron className="pt-20 md:pt-36" />
        <section className="section section-where-to-buy pb-24">
          <div className="container mx-auto px-5">
            <PageHeadings align="center" title="Blog" />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Blog;
