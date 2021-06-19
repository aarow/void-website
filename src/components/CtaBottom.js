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

  const wrapperId = `cta-${id}`;
  const wrapperClass = `cta--wrapper py-4 position-absolute ${cssClasses}`;
  const rowClass = centered
    ? "cta-block flex-column align-items-center justify-content-center text-center"
    : "cta-block align-items-center justify-content-between";
  const wrapperStyle = {
    backgroundColor: backgroundColor ? backgroundColor.hex : "inherit",
    bottom: "2rem",
    left: "2rem",
    width: "calc(100% - 4rem)",
  };
  const textColorStyle = { color: whiteText ? "#fff" : "inherit" };
  const linkClass = whiteText ? "btn-outline-light" : "btn-outline-dark";

  return (
    <>
      <div id={wrapperId} className={wrapperClass} style={wrapperStyle}>
        <Container>
          <Row className={rowClass}>
            <Col xs={12} md={8}>
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

            <Col xs={12} md="auto" className="my-4">
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
