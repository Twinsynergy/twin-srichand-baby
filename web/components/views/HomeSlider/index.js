import SbEditable from "storyblok-react";

import BannerCarousel from "../BannerCarousel";

const HomeSlider = ({ blok }) => (
  <SbEditable content={blok}>
    <div className="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible">
      <BannerCarousel
        slideValues={blok.sort((a, b) => +a.content.order_id - +b.content.order_id)}
        url="/"
        asPath="/"
        play={false}
        align="bottom"
      />
    </div>
  </SbEditable>
);

export default HomeSlider;
