import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ContactForm from "./ContactForm";

export default function ContactButton(props) {
  const { size = "md" } = props;
  const [showForm, setShowForm] = useState(false);
  const handleClose = () => setShowForm(false);
  const handleShow = () => setShowForm(true);

  return (
    <>
      <Button variant="outline-light" size={size} onClick={handleShow}>
        Contact
      </Button>

      <Modal show={showForm} onHide={handleClose}>
        <Modal.Body>
          <ContactForm cancel={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}
