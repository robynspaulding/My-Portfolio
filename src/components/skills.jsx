import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Skills() {
  return (
    <Container style={{ textAlign: "left", padding: "50px" }}>
      <Row>
        <Col>
          <h1 id="skills" >
            Skills:
          </h1>
          <br />
        </Col>

        <Col>
          <strong>Programming Languages:</strong>
          <br />
          Proficiency in JavaScript, Ruby, Typescript
        </Col>
        <Col>
          <strong>Web Development:</strong>
          <br />
          Front-end technologies: HTML, CSS, JavaScript, React, Bootstrap
          <br />
          Back-end technologies: Ruby on Rails, Springboot
          <br />
          Problem-solving and debugging
        </Col>
        <Col>
          <strong>Database Management:</strong>
          <br />
          Experience with relational databases: PostgreSQL, GUIs, Postico
        </Col>
        <Col>
          <strong>Version Control: </strong>
          <br />
          Proficiency with Git and GitHub for code management and collaboration
        </Col>
        <Col>
          <strong>API Development:</strong>
          <br /> Building and consuming RESTful APIs and understanding API design principles
        </Col>
        <Col>
          <strong>Software Architecture:</strong>
          <br />
          Experience with MVC software architecture pattern
        </Col>
      </Row>
    </Container>
  );
}
