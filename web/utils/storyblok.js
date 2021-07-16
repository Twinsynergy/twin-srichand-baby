import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: "PM9yYSQ41WRB9FD6KWoxKgtt",
  cache: {
    clear: "auto",
    type: "memory"
  }
});

// example 2
// export async function getAllEvents() {
//   const response = await fetch(
//     `https://api.storyblok.com/v1/cdn/stories/?starts_with=slide/&token=`,
//   );

//   const { stories } = await response.json();
//   return stories;
// }

// Get all content from the news folder
export async function getAllContentFromSlide() {
  const response = await Storyblok.get("cdn/stories", {
    starts_with: "slide/"
  });
  return response.data;
}

export default Storyblok;
