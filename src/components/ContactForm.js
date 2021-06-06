import { Form, Button } from "react-bootstrap";

export default function ContactForm(props) {
  return (
    <>
      <h2 className="h3 text-center">Contact Me</h2>
      <Form data-netlify="true">
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your name" />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Your email address" />
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="phone" placeholder="" />
        </Form.Group>

        <Form.Group controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control as="select">
            <option>Learn more</option>
            <option>Volunteer</option>
            <option>Receive updates</option>
            <option>Ideas</option>
            <option>Other (please fill in message)</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Leave a message..."
          />
        </Form.Group>

        <Button variant="dark" type="submit" className="mr-3">
          Submit
        </Button>
        <Button variant="outline-secondary" onClick={props.cancel}>
          Cancel
        </Button>
      </Form>
    </>
  );
}
