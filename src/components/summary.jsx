import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ContactLinks } from "./contactLinks";

export function Summary() {
  const headingStyle = {
    paddingTop: "50px",
  };
  return (
    <Container fluid="md" style={{padding: "25px"}}>
      <Row>
        <Col>
          <h1 style={headingStyle}> Hi, I'm Robyn Spaulding</h1>
          <p>
            I am a Software Engineer located in the California Bay Area. I currently work as a Remote Web Developer
            Intern for Booz Allen Hamilton in South Carolina. I am always looking to learn and increase my skills as a
            developer through connecting with other professionals and working on new tech in my projects. You can reach me at any
            of the links below!
          </p>
          <hr />
          <p>
            <ContactLinks />
          </p>
        </Col>
        <Col>
          <img src="images/workIcon.jpg" alt="" style={{ width: "auto", height: "300px" }}></img>
        </Col>
      </Row>
    </Container>
  );
}
