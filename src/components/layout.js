import Head from "next/head";

import Meta from "./meta";
import SiteHeader from "./site_header";
import SiteFooter from "./site_footer";

const BODY_CLASS = "min-vh-100 overflow-hidden d-flex flex-column";

export default function Layout(props) {
  const { children, isHome = false } = props;
  const bodyClass = isHome ? BODY_CLASS : `pt-7 ${BODY_CLASS}`;
  return (
    <>
      <Head>
        <Meta />
      </Head>

      <div className={bodyClass}>
        <SiteHeader isHome={isHome} />
        <main className="site-main flex-grow-1">{children}</main>
        <SiteFooter />
      </div>
    </>
  );
}
