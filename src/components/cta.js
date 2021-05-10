import { Container, Row, Col } from "react-bootstrap";

const Cta = (props) => {
  // console.log(props);
  const {
    content,
    linkTitle,
    linkUrl,
    centered,
    backgroundColor,
    textColor,
  } = props;

  let rowClass = centered
    ? "flex-column align-items-center justify-content-center text-center"
    : "align-items-center justify-content-between";

  const wrapperStyle = {
    backgroundColor: backgroundColor.hex,
    color: textColor.hex,
  };

  return (
    <div style={wrapperStyle} className="py-5">
      <Container>
        <Row className={rowClass}>
          <Col xs={12} md={8}>
            <div dangerouslySetInnerHTML={{ __html: content.html }} />
          </Col>
          <Col xs={12} md="auto">
            <a href={linkUrl} className="btn btn-outline-light btn-lg">
              {linkTitle}
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cta;
