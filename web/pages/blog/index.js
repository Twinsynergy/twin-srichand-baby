import React from "react";
import Link from "next/link";
import { Layout } from "@/components/container";
import { BlogCard, FilterContent } from "@/components/views";
import { HeadSeo, PageTitle } from "@/components/commons";
import { getAllContentFromBlog } from "@/utils/storyblok";

const Blog = (props) => {
  const { story } = props;
  return (
    <>
      <HeadSeo
        siteTitle="Blog"
        desc="ข่าวสารและเกร็คความรู้การใช้ผลิตภัณฑ์สำหรับเด็กเล็ก"
        siteUrl="https://srichandbaby.twinsynergy.co.th/blog"
        imgPreload="/assets/image/banner-polygon.webp"
      />
      <Layout>
        <PageTitle className="pt-20 md:pt-36" />
        <section className="section section-where-to-buy pb-24">
          <FilterContent
            title="Blog"
            optFilter={[
              <li aria-hidden="true" className="inline-block">
                <Link href="/blog/desc">
                  <a>ใหม่สุด</a>
                </Link>
              </li>,
              <li className="inline-block px-1"> | </li>,
              <li aria-hidden="true" className="inline-block">
                <Link href="/blog/asc">
                  <a>เก่าสุด</a>
                </Link>
              </li>
            ]}
          />
          <div className="content-wrapper text-gray-600 body-font">
            <div className="container px-5 pb-0 md:pb-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {story.map((item) => (
                  <BlogCard
                    key={item.uuid}
                    slug={item.slug}
                    image={item.content.image}
                    title={item.content.title}
                    published={item.published_at}
                    intro={item.content.intro}
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
  const { stories } = await getAllContentFromBlog();
  return {
    props: {
      story: stories || [],
      preview: context.preview || false
    },
    revalidate: 1
  };
}

export default Blog;
