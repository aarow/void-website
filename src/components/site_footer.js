import { Container, Row, Col } from "react-bootstrap";

export default function SiteFooter() {
  return (
    <footer className="site-footer bg-dark text-white py-5">
      <Container>
        <Row>
          <Col className="text-center">
            VOID is a non-profit 501(3)(c) organization located in California
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
