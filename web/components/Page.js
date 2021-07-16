/* eslint-disable import/no-cycle */
/* eslint-disable no-underscore-dangle */
import SbEditable from "storyblok-react";
import DynamicComponent from "./DynamicComponent";

const Page = ({ blok }) => (
  <SbEditable content={blok}>
    <main>
      {blok.body.map((data) => (
        <DynamicComponent blok={data} key={data._uid} />
      ))}
    </main>
  </SbEditable>
);

export default Page;
