import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import NewsletterForm from "./NewsletterForm";

export default function NewsletterButton(props) {
  const { size = "md", title = "Sign Up" } = props;
  const [showForm, setShowForm] = useState(false);
  const handleClose = () => setShowForm(false);
  const handleShow = () => setShowForm(true);

  return (
    <>
      <Button variant="outline-light" size={size} onClick={handleShow}>
        {title}
      </Button>

      <Modal show={showForm} onHide={handleClose}>
        <Modal.Body>
          <NewsletterForm cancel={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}
