/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import moment from "moment";

import { Layout } from "@/components/container";
import { HeadSeo } from "@/components/commons";
import { SingleProduct, ProductSlider } from "@/components/views";
import Storyblok, { getAllProducts } from "@/utils/storyblok";

const SingleBlog = (props) => {
  const { story, stories } = props;
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

  if (router.isFallback) {
    return <h1>Loading...</h1>;
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
          "https://img2.storyblok.com/"
        )}
        siteUrl={`https://srichandbaby.com/${story.full_slug}`}
      />
      <Layout>
        {story !== undefined ? (
          <SingleProduct
            title="SRICHAND BABY - NEW BORN POWDER"
            routes={breadcrumbs}
            published={moment(story.published_at).format("DD/MM/YYYY")}
            blok={story && story.content}
          />
        ) : (
          "loading"
        )}
        <div className="container mx-auto px-5 pb-24 md:pb-48">
          <h2 className="text-center uppercase mt-10 mb-20">Related Products</h2>
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

export default SingleBlog;
