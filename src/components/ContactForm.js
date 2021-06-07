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

    // const { name, email, message, phone, subject } = data;

    // const endpoint =
    //   "https://jjvn35hztg.execute-api.us-east-2.amazonaws.com/default/sendEmail";

    // const body = JSON.stringify({
    //   toAddresses: ["amy@anfhelp.org"],
    //   senderName: name,
    //   senderEmail: email,
    //   message: `
    //     Name: ${name}\n
    //     Email: ${email}\n
    //     Phone: ${phone}\n\n
    //     Subject: ${subject}\n\n
    //     Message: ${message}
    //   `,
    // });

    // const requestOptions = {
    //   method: "POST",
    //   body,
    // };

    // fetch(endpoint, requestOptions)
    //   .then((response) => {
    //     if (!response.ok) throw new Error("Error in fetch");
    //     return response.json();
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     setIsSubmitting(false);
    //     setIsSuccess(true);
    //     // document.getElementById("result-text").innerText =
    //     //   "Email sent successfully!";
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setIsSubmitting(false);

    //     // document.getElementById("result-text").innerText =
    //     //   "An unkown error occured.";
    //   });
  };

  return (
    <>
      <h2 className="h3 text-center">Contact Me</h2>
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
