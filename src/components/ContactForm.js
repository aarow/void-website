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
  const [hasError, setError] = useState(false);

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
      <div  className="text-center">
        <h2 className="mb-0">Contact VOID</h2>
        <p className="mt-1">Call us 1-800-799-7951</p>
        <h3>Send a message</h3>
      </div>
      
      {!isSubmitting && !isSuccess && hasError && 
        <p className="text-error">Error during submission. Please try again</p>
      }
      {!isSubmitting && !isSuccess && (
        <Form
          onSubmit={handleSubmit(onSubmit)}
          data-netlify="true"
          name="contact"
          id="contact"
        >
          <input
            type="text"
            name="form-name"
            value="contact"
            hidden
            {...register("form-name", { value: "contact" })}
          />

          <Form.Group controlId="name">
            <Form.Label>Name (required)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your name"
              {...register("name", { required: true })}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email (required)</Form.Label>
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
