import { useState, useRef } from "react";
import {
  PayPalButtons,
  usePayPalScriptReducer,
  FUNDING,
} from "@paypal/react-paypal-js";
import debounce from "lodash/debounce";
import {
  Form,
  InputGroup,
  FormControl,
  Button,
  Accordion,
  useAccordionToggle,
  Collapse,
} from "react-bootstrap";
import { RiCheckboxCircleLine } from "react-icons/ri";

export default function PayPal(props) {
  const [amount, setAmount] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  const [orderID, setOrderID] = useState("");
  const [onApproveMessage, setOnApproveMessage] = useState(false);
  const [onErrorMessage, setOnErrorMessage] = useState("");
  const [open, setOpen] = useState(false);
  const otherAmountRef = useRef(null);
  const [{ isResolved }] = usePayPalScriptReducer();
  const [approvedDetails, setApprovedDetails] = useState(false);

  const changeHandler = (event) => {
    setAmount(event.target.value);
  };

  const amountButtonHandler = (theAmount) => {
    setOpen(false); // close 'other' section
    setActiveButton(theAmount); // highlight amount button
    setAmount(theAmount); // set amount separately
  };

  const otherButtonHandler = () => {
    setActiveButton("other"); // reset active button
    setOpen(true); // open/close 'other' section
  };

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: amount,
              breakdown: {
                item_total: {
                  currency_code: "USD",
                  value: amount,
                },
              },
            },
            items: [
              {
                name: "donation-example",
                quantity: "1",
                unit_amount: {
                  currency_code: "USD",
                  value: amount,
                },
                category: "DONATION",
              },
            ],
          },
        ],
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  }

  function onApprove(data, actions) {
    return actions.order.capture().then(function (details) {
      setApprovedDetails(details);
      console.log(details);

      setOnApproveMessage(
        `Transaction completed by ${details.payer.name.given_name}!`
      );
    });
  }

  function onError(err) {
    setOnErrorMessage(err.toString());
  }

  return (
    <div>
      {approvedDetails && (
        <div className="text-center">
          <RiCheckboxCircleLine className="text-success" size="3rem" />
          <h3>Thank you {approvedDetails.payer.name.given_name}</h3>
          <p>
            Your ${approvedDetails.purchase_units[0].amount.value} donation was
            accepted.
          </p>
        </div>
      )}

      {!onApproveMessage && (
        <div>
          <label htmlFor="amount">Donation Amount: </label>
          <Form.Group>
            {[10, 25, 50].map((theAmount) => (
              <Button
                key={`amount-${theAmount}`}
                variant={activeButton === theAmount ? "dark" : "outline-dark"}
                className="mr-2"
                onClick={() => amountButtonHandler(theAmount)}
              >
                {`$${theAmount}`}
              </Button>
            ))}

            <Button
              variant={activeButton === "other" ? "dark" : "outline-dark"}
              onClick={otherButtonHandler}
            >
              Other
            </Button>
          </Form.Group>
          <Collapse in={open} onEntered={() => otherAmountRef.current.select()}>
            <Form.Group>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  ref={otherAmountRef}
                  onChange={changeHandler}
                  value={amount}
                  type="text"
                  className="form-control"
                  placeholder="0.00"
                />

                {/* <input type="text" ref={otherAmountRef}
              onChange={changeHandler}
              value={amount}
              type="text"
              className="form-control"
              placeholder="0.00" /> */}
              </InputGroup>
            </Form.Group>
          </Collapse>

          <PayPalButtons
            fundingSource={FUNDING.PAYPAL}
            style={{
              label: "donate",
              color: "black",
              shape: "rect",
              tagline: false,
              layout: "horizontal",
            }}
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
            forceReRender={[amount]}
          />
        </div>
      )}
    </div>
  );
}
