export default function ContactPage(props) {
  return (
    <form name="contact" data-netlify="true">
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="text" name="phone" />
      <select name="subject" />
      <textarea name="message"></textarea>
    </form>
  );
}
