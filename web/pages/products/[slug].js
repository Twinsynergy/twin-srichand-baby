/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import moment from "moment";

import { Layout } from "@/components/container";
import { HeadSeo } from "@/components/commons";
import { SingleProduct, ProductSlider } from "@/components/views";
import Storyblok, { getAllProducts } from "@/utils/storyblok";

const ProductDetail = (props) => {
  const { story, stories } = props;
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="w-full h-screen">
        <div className="flex items-center justify-center">
          <h1 className="text-center text-primary">Loading...</h1>
        </div>
      </div>
    );
  }

  if (!router.isFallback && !story) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <HeadSeo
        siteTitle={story && story.content.title}
        desc={story && story.content.intro}
        imgSrc={story.content.feature_product.filename.replace(
          "//a.storyblok.com",
          "//img2.storyblok.com/"
        )}
        siteUrl={`https://srichandbaby.twinsynergy.co.th/${story.full_slug}`}
      />
      <Layout>
        {story !== undefined ? (
          <SingleProduct
            title="SRICHAND BABY - NEW BORN POWDER"
            published={moment(story.published_at).format("DD/MM/YYYY")}
            blok={story && story.content}
          />
        ) : (
          "loading"
        )}
        <div className="container mx-auto px-5 pb-24 md:pb-48">
          <h2 className="text-center uppercase mt-20 mb-14">Related Products</h2>
          <ProductSlider blok={stories} />
        </div>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const stories = await getAllProducts();
  const paths = [];
  for (const linkKey of Object.keys(stories.stories)) {
    if (stories.stories[linkKey].slug !== "home") {
      paths.push({ params: { slug: stories.stories[linkKey].slug } });
    }
  }

  return {
    paths,
    fallback: false
  };
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { stories } = await getAllProducts();
  const { data } = await Storyblok.get(`cdn/stories/products/${slug}`);
  return {
    props: {
      slug,
      stories,
      story: data.story
    },
    revalidate: 10
  };
};

export default ProductDetail;
