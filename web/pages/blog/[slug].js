/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
import React, { useState } from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

import { Layout } from "@/components/container";
import { HeadSeo, PageTitle } from "@/components/commons";
import { SinglePost, SectionShare } from "@/components/views";
import Storyblok, { getAllContentFromBlog } from "@/utils/storyblok";

const BlogPage = (props) => {
  const [story] = useState(props.data);
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
    <Layout>
      <HeadSeo
        siteTitle={story && story.name}
        desc={story && story.content.intro}
        imgSrc={story.content.image.replace("//a.storyblok.com", "//img2.storyblok.com/0x500/")}
        siteUrl={`https://srichandbaby.twinsynergy.co.th/${story.full_slug}`}
      />
      <PageTitle hasBreadcrumbs={false} className="pt-40 md:pt-44" />
      {story !== undefined ? (
        <SinglePost published={story.published_at} blok={story.content} />
      ) : (
        "loading"
      )}
      <SectionShare
        slug={story && story.content.slug}
        title={story && story.content.title}
        // quote=""
        // hashtag=""
      />
    </Layout>
  );
};

export async function getStaticPaths() {
  const stories = await getAllContentFromBlog();
  const paths = [];
  for (const linkKey of Object.keys(stories.stories)) {
    paths.push({ params: { slug: stories.stories[linkKey].slug } });
  }
  return {
    paths,
    fallback: false
  };
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { data } = await Storyblok.get(`cdn/stories/blog/${slug}`);
  return {
    props: {
      slug,
      data: data.story
    },
    revalidate: 1
  };
};

export default BlogPage;
