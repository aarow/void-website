import { Container, Row, Col } from "react-bootstrap";
import ContactButton from "./ContactButton";

const Cta = (props) => {
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
  const wrapperClass = `cta--wrapper py-10 ${cssClasses}`;
  const rowClass = centered
    ? "cta-block flex-column align-items-center justify-content-center text-center"
    : "cta-block align-items-center justify-content-between";
  const blockDecorationClass =
    "block--decoration d-inline-block border-left border-secondary pt-5";
  const iconClass = "block--icon mb-3";
  const wrapperStyle = {
    backgroundColor: backgroundColor ? backgroundColor.hex : "inherit",
  };
  const textColorStyle = { color: whiteText ? "#fff" : "inherit" };
  const linkClass = whiteText ? "btn-outline-light" : "btn-outline-dark";

  return (
    <>
      <div id={wrapperId} className={wrapperClass} style={wrapperStyle}>
        <Container>
          <Row className={rowClass}>
            <Col xs={12} md={8}>
              {!icon && centered && <span className={blockDecorationClass} />}
              {icon && centered && <img src={icon.url} className={iconClass} />}
              <p style={textColorStyle} className="h5">
                {subHeader}
              </p>
              <h2 style={textColorStyle}>{header}</h2>
              <p style={textColorStyle}>{content}</p>
            </Col>
            {ctaType === "Contact" && <ContactButton size="lg" />}
            {ctaType !== "Contact" && linkUrl && linkTitle && (
              <Col xs={12} md="auto" className="my-4">
                <a href={linkUrl} className={`btn btn-lg ${linkClass}`}>
                  {linkTitle}
                </a>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Cta;
