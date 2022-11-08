import { SliceZone } from "@prismicio/react";
import { Layout } from "../components/Layout";
import { createClient } from '../prismicio';
import { components } from '../slices/index';

const __allComponents = { ...components }

export default function Home({ doc, menu }) {
  return (
    <div>
      <Layout menu={menu}>
        <SliceZone slices={doc?.data?.slices} components={__allComponents} />
      </Layout>
    </div>
  )
}

export async function getStaticProps({ previewData }) {

  const client = createClient(previewData)

  const document = (await client.getSingle('homepage').catch(e => {
    console.log(e)
    return null;
  }));

  if (!document) {
    return {
      notFound: true,
    }
  }

  const menu = (await client.getSingle("menu").catch(e => {
    return null
  }));

  return {
    props: {
      doc: document,
      menu,
    }, // will be passed to the page component as props
  }
}