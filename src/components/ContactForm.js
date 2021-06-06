import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function ContactForm(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsSubmitting(true);

    return fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      })
      .catch((error) => {
        console.log("form submission error: \n", { error });
        setIsSubmitting(false);
      });
  };
  return (
    <>
      <h2 className="h3 text-center">Contact Me</h2>
      {!isSubmitting && !isSuccess && (
        <Form
          name="contact"
          data-netlify="true"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" name="form-name" value="contact" />
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your name"
              {...register("name", { required: true })}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your email address"
              {...register("email", { required: true })}
            />
          </Form.Group>

          <Form.Group controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="phone"
              placeholder=""
              {...register("phone", {
                pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
              })}
            />
          </Form.Group>

          <Form.Group controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control as="select" {...register("subject")}>
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
              {...register("message")}
            />
          </Form.Group>

          <Button variant="dark" type="submit" className="mr-3">
            Submit
          </Button>
          <Button variant="outline-secondary" onClick={props.cancel}>
            Cancel
          </Button>

          <input type="hidden" name="contact" value="contact" />
        </Form>
      )}
      {isSuccess && (
        <div>
          Thank you for contacting VOID. We will respond as quickly as possible.
        </div>
      )}
    </>
  );
}
