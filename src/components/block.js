import { Container, Row, Col } from "react-bootstrap";

export default function Block(props) {
  const {
    content = "",
    title,
    backgroundColorForBlock = "#fff",
    textColor = "#000",
    cssClasses = "",
    icon = null,
  } = props;

  const wrapperClass = `block-wrapper py-10 ${cssClasses}`;
  const rowClass = "align-items-center justify-content-center text-center";
  const iconClass = "block--icon mb-3";
  const blockDecorationClass =
    "block--decoration d-inline-block border-left border-secondary pt-5";
  const wrapperStyle = {
    backgroundColor: backgroundColorForBlock.hex,
    color: textColor.hex,
  };

  return (
    <div style={wrapperStyle} className={wrapperClass}>
      <Container>
        <Row className={rowClass}>
          <Col xs={12} md={8}>
            {!icon && <span className={blockDecorationClass} />}
            {icon && <img src={icon.url} className={iconClass} />}
            <div dangerouslySetInnerHTML={{ __html: content.html }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
