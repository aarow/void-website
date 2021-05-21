import { Form, Button } from "react-bootstrap";

export default function ContactForm(props) {
  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="outline-light" type="submit" className="mr-3">
          Submit
        </Button>
        <Button variant="outline-secondary" onClick={props.cancel}>
          Cancel
        </Button>
      </Form>
    </>
  );
}
