import Head from "next/head";

export default function ContactPage(props) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <form name="contact" data-netlify="true">
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="phone" />
        <select name="subject" />
        <textarea name="message"></textarea>
      </form>
    </>
  );
}
