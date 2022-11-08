import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.TitleSlice} TitleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TitleSlice>} TitleProps
 * @param { TitleProps }
 */
const Title = ({ slice }) => (
  <section>
    <div className="border-b border-gray-200 py-5">
      <div className="text-3xl text-gray-900 font-bold leading-8 tracking-tight px-5">
        <PrismicRichText field={slice.primary.title} />
      </div>
    </div>
  </section>
);

export default Title;
