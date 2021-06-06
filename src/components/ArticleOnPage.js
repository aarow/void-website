import { Container, Row, Col } from "react-bootstrap";

export default function Article(props) {
  const { title, body, mainImage } = props;
  return (
    <div className="article-on-page ">
      <Container className="py-10">
        <Row className="justify-content-md-center">
          <Col lg="8" xl="6">
            <div className="text-center">
              <span className="block--decoration d-inline-block border-left border-secondary pt-5"></span>
            </div>
            <h2 className="text-center">{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: body.html }} />
          </Col>
        </Row>
      </Container>
      <div className="floating-image--1">
        <img src={mainImage.url} alt={mainImage.alt} />
      </div>
    </div>
  );
}
