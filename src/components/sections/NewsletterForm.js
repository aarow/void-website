import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function NewsletterForm(props) {
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
      body: encode({ "form-name": "newsletter", ...data }),
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
      <h2 className="h3 text-center">Newsletter Sign-Up</h2>
      {!isSubmitting && !isSuccess && (
        <Form
          onSubmit={handleSubmit(onSubmit)}
          data-netlify="true"
          name="newsletter"
          id="newsletter"
        >
          <input
            type="text"
            name="form-name"
            value="newsletter"
            hidden
            {...register("form-name", { value: "newsletter" })}
          />

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

          <Button variant="dark" type="submit" className="mr-3">
            Submit
          </Button>
          <Button variant="outline-secondary" onClick={props.cancel}>
            Cancel
          </Button>
        </Form>
      )}
      {isSuccess && <div>Thank you for signing up.</div>}
    </>
  );
}
