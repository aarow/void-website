// import { SITE_NAME } from "../lib/constants";

export default function Meta() {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
      <link rel="manifest" href="/favicon/site.webmanifest" />

      {/* <meta name="msapplication-TileColor" content="#000000" /> */}
      {/* <meta name="msapplication-config" content="/favicon/browserconfig.xml" /> */}
      {/* <meta name="theme-color" content="#000" /> */}
      {/* <link rel="alternate" type="application/rss+xml" href="/feed.xml" /> */}
      {/* <meta name="description" content={SITE_NAME} /> */}
      {/* <meta property="og:image" content={HOME_OG_IMAGE_URL} /> */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      /> */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600&family=Mulish:ital,wght@0,200;0,300;0,400;1,400&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
