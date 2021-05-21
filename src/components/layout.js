import Head from "next/head";

import Meta from "./meta";
import SiteHeader from "./site_header";
import SiteFooter from "./site_footer";

export default function Layout(props) {
  const { children, isHome = false } = props;
  return (
    <>
      <Head>
        <Meta />
      </Head>

      <div className="min-vh-100 overflow-hidden d-flex flex-column ">
        <SiteHeader isHome={isHome} />
        <main className="site-main flex-grow-1">{children}</main>
        <SiteFooter />
      </div>
    </>
  );
}
