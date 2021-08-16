import Head from "next/head";

import Meta from "./meta";
import SiteHeader from "./site_header";
import SiteFooter from "./site_footer";
import { getPageRoutes } from "../lib/graphcms";

const BODY_CLASS = "min-vh-100 overflow-hidden d-flex flex-column";

export default function Layout(props) {
  getPageRoutes().then((data) => console.log(data.props.pages));

  // console.log(props);
  const { children, isHome = false, topPadding = true, className } = props;
  let bodyClass = `${BODY_CLASS} ${className}`;
  bodyClass = !isHome && topPadding ? `pt-10 ${bodyClass}` : bodyClass;
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
