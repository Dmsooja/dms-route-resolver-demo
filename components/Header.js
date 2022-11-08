import {
  PrismicLink,
  PrismicRichText,
  PrismicText,
  SliceZone,
} from "@prismicio/react";
import { components } from "../slices";

const __allComponents = { ...components };

export const Header = ({ menu }) => (
  <header className="relative -mb-px border-b border-neutral-200 bg-white px-6 py-4">
    <div className="mx-auto flex max-w-5xl items-baseline md:items-center">
      <nav className="flex-grow">
        <ul className="-ml-5 flex justify-end">
          {menu.data.breadcrumb.map((item, idx) => (
            <li key={idx} className="relative mx-4">
              <PrismicLink
                document={item.link}
                className="relative -m-4 p-4 text-xl font-black"
              >
                {item.label}
              </PrismicLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);
