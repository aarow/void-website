import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactButton from "./ContactButton";
import NewsletterButton from "./NewsletterButton";

export default function CtaBottom(props) {
  const {
    id,
    header,
    subHeader,
    content,
    linkTitle,
    linkUrl,
    centered,
    backgroundColor,
    textColor,
    cssClasses = "",
    icon = null,
    whiteText,
    ctaType,
  } = props;
  const [show, setShow] = useState(true);
  const wrapperId = `cta-${id}`;
  const wrapperClass = `cta--wrapper py-3 position-absolute ${cssClasses}`;
  const rowClass = centered
    ? "cta-block flex-column align-items-center justify-content-center text-center"
    : "cta-block align-items-center justify-content-between";
  const wrapperStyle = {
    backgroundColor: backgroundColor ? backgroundColor.hex : "inherit",
    bottom: "2rem",
    left: "2rem",
    width: "calc(100% - 4rem)",
    display: show ? "block" : "none",
  };
  const textColorStyle = { color: whiteText ? "#fff" : "inherit" };
  const linkClass = whiteText ? "btn-outline-light" : "btn-outline-dark";

  const hideThis = () => {
    setShow(false);
  };

  return (
    <>
      <div id={wrapperId} className={wrapperClass} style={wrapperStyle}>
        <button
          type="button"
          onClick={hideThis}
          className="btn btn-link text-white position-absolute"
          style={{ top: 0, right: 0 }}
        >
          &times;
        </button>
        <Container>
          <Row className={rowClass}>
            <Col sm={7}>
              <p style={textColorStyle} className="h5">
                {subHeader}
              </p>
              <h2 className="h3" style={textColorStyle}>
                {header}
              </h2>
              <p className="line-height-1-4" style={textColorStyle}>
                {content}
              </p>
            </Col>

            <Col sm={5} className="text-md-right">
              <NewsletterButton title={linkTitle} />
            </Col>

            {/* {ctaType !== "Contact" && linkUrl && linkTitle && (
              <Col xs={12} md="auto" className="my-4">
                <a href={linkUrl} className={`btn btn-lg ${linkClass}`}>
                  {linkTitle}
                </a>
              </Col>
            )} */}
          </Row>
        </Container>
      </div>
    </>
  );
}
