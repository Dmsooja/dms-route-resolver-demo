import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import "../styles/globals.css";
// import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="mx-auto max-w-3xl">
        <PrismicProvider
          internalLinkComponent={({ href, ...props }) => (
            <Link href={href}>
              <a {...props} />
            </Link>
          )}
        >
          <PrismicPreview repositoryName={repositoryName}>
            <Component {...pageProps} />
          </PrismicPreview>
        </PrismicProvider>
      </div>
    </div>
  );
}
