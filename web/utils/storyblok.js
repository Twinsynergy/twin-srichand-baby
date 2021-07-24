/* eslint-disable camelcase */
import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: "PM9yYSQ41WRB9FD6KWoxKgtt",
  cache: {
    clear: "auto",
    type: "memory"
  }
});

export function RichText({ document }) {
  const html = Storyblok.richTextResolver.render(document);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// Get all content from the news folder
export async function getAllContentFromSlide() {
  const response = await Storyblok.get("cdn/stories", {
    starts_with: "slide/"
  });
  return response.data;
}

export async function getProductMainPageSlide() {
  const response = await Storyblok.get("cdn/stories", {
    starts_with: "product-slide/"
  });
  return response.data;
}

export async function getAllContentFromBlog() {
  const response = await Storyblok.get("cdn/stories", {
    starts_with: "blog/"
  });
  return response.data;
}

export async function getPostBySlug(full_slug) {
  const { data } = await Storyblok.get(`cdn/stories/blog/${full_slug}`, {});
  return data;
  // const response = await fetch(
  //   `https://api.storyblok.com/v1/cdn/stories/${full_slug}?token=${process.env.STORYBLOK_API_KEY}`,
  // );
  // const { story } = await response.json();
  // return story;
}

export async function getAllContentFromBlogAsc() {
  const response = await Storyblok.get("cdn/stories", {
    starts_with: "blog/",
    sort_by: `first_published_at:asc`
  });
  return response.data;
}

export async function getAllContentFromBlogDesc() {
  const response = await Storyblok.get("cdn/stories", {
    starts_with: "blog/",
    sort_by: `first_published_at:desc`
  });
  return response.data;
}

export default Storyblok;

export async function getAllProducts() {
  const response = await Storyblok.get("cdn/stories", {
    starts_with: "products/"
  });
  return response.data;
}

export async function getAllProductsAsc() {
  const response = await Storyblok.get("cdn/stories", {
    starts_with: "products/",
    sort_by: `first_published_at:asc`
  });
  return response.data;
}

export async function getAllProductsDesc() {
  const response = await Storyblok.get("cdn/stories", {
    starts_with: "products/",
    sort_by: `first_published_at:desc`
  });
  return response.data;
}

export async function getProductsBySlug(full_slug) {
  const { data } = await Storyblok.get(`cdn/stories/products/${full_slug}`, {});
  return data;
}
