import Head from "next/head";

import Meta from "./meta";
import SiteHeader from "./site_header";
import SiteFooter from "./site_footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <Meta />
      </Head>

      <div className="min-vh-100 overflow-hidden">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </div>
    </>
  );
}
