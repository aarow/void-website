import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ContactForm from "./ContactForm";

export default function ContactButton(props) {
  const { size = "md", className } = props;
  const [showForm, setShowForm] = useState(false);
  const handleClose = () => setShowForm(false);
  const handleShow = () => setShowForm(true);

  return (
    <>
      <Button
        variant="outline-light"
        size={size}
        onClick={handleShow}
        className={className}
      >
        Contact
      </Button>

      <Modal show={showForm} onHide={handleClose}>
        <Modal.Body>
          <div className="text-center">
            <h2 className="mb-0">Contact VOID</h2>
            <p className="mt-1">Call us 1-800-799-7951</p>
            <h3>Send a message</h3>
          </div>

          <ContactForm cancel={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}
