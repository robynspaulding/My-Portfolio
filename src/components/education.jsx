import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Education() {
  return (
    <Container style={{ textAlign: "left", padding: "50px" }}>
      <Row>
        <Col>
          <h1 id="education"> Education:</h1>
          <br />
        </Col>
        <Col>
          <strong>Develop Carolina | Registered Apprenticeship and Journeyman Certification</strong>
          <br /> July 2023 – Will obtain December 2023 <br />
          Remote, SC
        </Col>
        <Col>
          <strong>Actualize Coding Bootcamp | Certificate in Full-Stack Web Development</strong>
          <br />
          July 2022 - November 2022 <br />
          Remote, IL
        </Col>
        <Col>
          <strong>San Francisco State University | Bachelor of Arts in English Education</strong>
          <br />
          August 2010 - May 2013 <br />
          San Francisco, CA
        </Col>
      </Row>
    </Container>
  );
}
