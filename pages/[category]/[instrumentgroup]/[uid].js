import { PrismicRichText, SliceZone } from "@prismicio/react";
import { Layout } from "../../../components/Layout";
import { createClient } from "../../../prismicio";
import { components } from "../../../slices/index";
import * as prismicH from "@prismicio/helpers";

const __allComponents = { ...components };

const Instrument = (doc, menu) => {
    console.log(doc?.data?.name)
  return (
    <div>
        <PrismicRichText field={doc?.data?.name}/>
      <Layout menu={menu}>
        <SliceZone slices={doc?.data?.slices} components={__allComponents} />
      </Layout>
    </div>
  );
};

export default Instrument;

export async function getStaticProps({ params, previewData }) {
  const client = createClient(previewData);

  const document = await client.getByUID("instrument_type", params.uid).catch(e => {
      return null;
    });

    const menu = (await client.getSingle("menu").catch(e => {
        return null
      }));

  return {
    props: {
      doc: document,
      menu,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();
  const documents = await client.getAllByType("instrument_type");

  return {
    paths: documents.map((doc) => prismicH.asLink(doc)),
    fallback: false, // if a page has already been generated but doesn't show => display the cached page
  };
}
