/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import Teaser from "./Teaser";
import Grid from "./Grid";
import Feature from "./Feature";
import Placeholder from "./Placeholder";
import FeaturedPosts from "./FeaturedPosts";
import Page from "./Page";
import { SinglePost } from "./views";
import PostsList from "./PostsList";
import SliderItem from "./Slider";
import ProductBlockImage from "./ProductBlockImage";

// resolve Storyblok components to Next.js components
const Components = {
  teaser: Teaser,
  grid: Grid,
  feature: Feature,
  slider: SliderItem,
  "slider-item": SliderItem,
  "featured-posts": FeaturedPosts,
  page: Page,
  post: SinglePost,
  images: ProductBlockImage,
  "selected-posts": PostsList
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
