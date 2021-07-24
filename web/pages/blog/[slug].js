/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import moment from "moment";

import { Layout } from "@/components/container";
import { HeadSeo, PageTitle, Breadcrumb } from "@/components/commons";
import { SinglePost, SectionShare } from "@/components/views";
import Storyblok, { getAllContentFromBlog } from "@/utils/storyblok";

const SingleBlog = (props) => {
  const { story } = props;
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
        imgSrc={story.content.image.replace("//a.storyblok.com", "//img2.storyblok.com/0x500/")}
        siteUrl={`https://srichandbaby.com/${story.full_slug}`}
      />
      <Layout>
        <PageTitle hasBreadcrumbs={false} className="pt-40 md:pt-44" />
        <div
          className="container mx-auto -mt-40 px-5 pt-5 md:pt-0 tourmaster-tour-booking-bar-wrap tourmaster-item-mglr"
          id="tourmaster-tour-booking-bar-wrap">
          <div className="tourmaster-tour-booking-bar-outer">
            {breadcrumbs && <Breadcrumb routes={breadcrumbs} />}
            <div className="tourmaster-tour-booking-bar-inner bg-white">
              <figure>
                <img
                  className="w-full my-10"
                  src={
                    story &&
                    story.content.image.replace(
                      "//a.storyblok.com",
                      "//img2.storyblok.com/0x500/filters:quality(80):format(webp)"
                    )
                  }
                  alt={story && story.content.title}
                />
                <figcaption className="hidden">{story && story.content.title}</figcaption>
              </figure>
            </div>
          </div>
        </div>
        {story !== undefined ? (
          <SinglePost
            published={moment(story.published_at).format("DD/MM/YYYY")}
            blok={story && story.content}
          />
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
    </>
  );
};

export async function getStaticPaths() {
  const stories = await getAllContentFromBlog();
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
  const { data } = await Storyblok.get(`cdn/stories/blog/${slug}`);
  return {
    props: {
      slug,
      story: data.story
    },
    revalidate: 10
  };
};

export default SingleBlog;
