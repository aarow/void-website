// import Head from "next/head";
import Document, { Html, Head, Main, NextScript } from "next/document";

import Meta from "./meta";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Meta />
        </Head>
        <body>
          <Main />
          <NextScript />

          <form name="contact" netlify netlify-honeypot="bot-field" hidden>
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="name" />
            <input type="email" name="email" />
            <input type="phone" name="phone" />
            <input type="subject" name="subject" />
            <textarea name="message"></textarea>
          </form>
        </body>
      </Html>
    );
  }
}

export default HtmlDocument;
