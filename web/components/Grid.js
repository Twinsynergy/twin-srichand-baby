import SbEditable from "storyblok-react";
import DynamicComponent from "./DynamicComponent";

const Grid = ({ blok }) => (
  <SbEditable content={blok}>
    <div className="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible">
      <div className="px-4 sm:px-6 xl:px-8 pt-10 pb-16">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          {blok.columns.map((nestedBlok) => (
            <li key={nestedBlok._uid} className="flex">
              <DynamicComponent blok={nestedBlok} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SbEditable>
);

export default Grid;
