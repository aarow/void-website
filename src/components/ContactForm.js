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
          <input type="hidden" name="contact" value="pizzaOrder" />
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
      {/* <Formik
        initialValues={initialValues}
        onSubmit={async (values) => console.log(values)}
      >
        <Form name="contact" disabled={isSubmitting}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" className="form-control"></Field>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" className="form-control"></Field>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <Field type="phone" name="phone" className="form-control"></Field>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <Field as="select" name="subject" className="form-control">
              <option value="Learn">Learn more</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Updates">Receive updates</option>
              <option value="Ideas">Ideas</option>
              <option value="Other">Other (please fill in message)</option>
            </Field>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <Field
              as="textarea"
              name="message"
              className="form-control"
            ></Field>
          </div>
          <div className="form-group">
            <Button variant="dark" type="submit" className="mr-3">
              Submit
            </Button>
            <Button variant="outline-secondary" onClick={props.cancel}>
              Cancel
            </Button>
          </div>

          <input type="hidden" name="contact" value="contact" />
        </Form>
      </Formik> */}
    </>
  );
}
