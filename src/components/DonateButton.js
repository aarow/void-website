import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import PayPal from "./PayPal";

export default function DonateButton(props) {
  const { variant = "outline-light", size = "md", className } = props;
  const [showForm, setShowForm] = useState(false);
  const handleClose = () => setShowForm(false);
  const handleShow = () => setShowForm(true);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={handleShow}
        className={className}
      >
        Donate
      </Button>

      <Modal show={showForm} onHide={handleClose}>
        <Modal.Body closeButton>
          <button type="button" class="close" onClick={handleClose}>
            <span aria-hidden="true">×</span>
            <span class="sr-only">Close</span>
          </button>
          <div className="text-center">
            <h2 className="mb-0">Contribute</h2>
            <p className="mt-1">
              We are trying to reach everyone with our message and help those
              who need it. Your contribution helps make that possible.
            </p>
          </div>
          <hr />
          <PayPal />
        </Modal.Body>
      </Modal>
    </>
  );
}
