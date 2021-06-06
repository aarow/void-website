import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
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

export default MyDocument;
