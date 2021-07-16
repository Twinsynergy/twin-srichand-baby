import SbEditable from "storyblok-react";

import { BannerCarousel } from "components/views";

const Slider = ({ blok }) => (
  <SbEditable content={blok}>
    <div className="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible">
      <BannerCarousel
        slideValues={blok.sort((a, b) => +a.order_id - +b.order_id)}
        url="/"
        asPath="/"
        play={false}
        align="bottom"
      />
    </div>
  </SbEditable>
);

export default Slider;
