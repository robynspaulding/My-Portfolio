import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function ContactLinks() {
  return (
    <Container>
      <Row>
        <Col>
          <p className="social-icons-container">
            <span className="span-icons">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/robyn-spaulding/"
                className="fa-brands fa-linkedin fa-2xl with-tooltip"
                style={{ marginRight: "85px", color: "#33a392" }}
              >
                <span className="tooltip-text">LinkedIn</span>
              </a>
              <a
                target="_blank"
                href="https://github.com/robynspaulding"
                className="fa-brands fa-github fa-2xl with-tooltip"
                style={{ marginRight: "85px", color: "#33a392" }}
              >
                <span className="tooltip-text">Github</span>
              </a>
              <a
                href="mailto:robynm27@gmail.com"
                className="fa-solid fa-envelope fa-2xl with-tooltip"
                style={{ marginRight: "85px", color: "#33a392" }}
              >
                <span className="tooltip-text">Email</span>
              </a>
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1KySkQGM0NhLRyAGDVDc2znRyLnyeFVmpMbW60w6V1zY/edit?usp=sharing"
                className="fa-solid fa-file-lines fa-2xl with-tooltip"
                style={{ marginRight: "85px", color: "#33a392" }}
              >
                <span className="tooltip-text">Resume</span>
              </a>
              <a
                target="_blank"
                href="https://robynspaulding.wordpress.com/"
                className="fa-solid fa-blog fa-2xl with-tooltip"
                style={{ marginRight: "85px", color: "#33a392" }}
              >
                <span className="tooltip-text">Blog</span>
              </a>
            </span>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
