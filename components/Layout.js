import Head from "next/head";
import { Header } from "./Header";

export const Layout = ({ children, menu }) => {
  return (
    <div>
      <div>
        <Head>
          <title> Route Resolver - Nested routes </title>
        </Head>
        {menu?.data ?
          <Header menu={menu}/>
          : null
        }
        <main className="mb-10">
          {children}
        </main>
      </div>
    </div>
  );
};
