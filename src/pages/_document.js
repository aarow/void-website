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
          <form name="contact" netlify netlify-honeypot="bot-field" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <input type="phone" name="phone" />
            <select type="subject" name="subject" />
            <textarea name="message"></textarea>
          </form>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
