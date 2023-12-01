import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Experience() {
  return (
    <div>
      <Container style={{ textAlign: "left", padding: "50px" }}>
        <Row>
          <Col>
            <h1 id="experience" >
              {" "}
              Experience:
            </h1>
            <br />
          </Col>
          <Col>
            <strong>Booz Allen Hamilton | Web Developer Intern</strong>
            <br />
            July 2023 – Present
            <br /> As a Web Developer Intern at Booz Allen Hamilton, I contribute to strategic initiatives in an Agile
            environment. My work involves working with Java in a Springboot backend API, Tpyescrypt in Angular and React
            frontend frameworks to build and maintain various APIs and applications. Engaging in Scrum teams, I actively
            participate in Agile ceremonies, collaborate cross-functionally, and address UI/UX defects to decrease
            technical debt. I proactively identify and address tech debt, boosting my toolkit with skills, most recently
            in AI courses and tooling.
          </Col>
          <Col>
            <strong>Develop Carolina | Web Developer Apprentice</strong>
            <br />
            July 2023 – Present
            <br />
            As a Web Developer Apprentice at Develop Carolina, I've completed various workshops covering software
            craftsmanship, computing fundamentals, networking, developer tooling, software architecture patterns,
            infrastructure, cloud technology, design, user experience, and clean code. These workshops provide exposure
            and knowledge applicable to software development projects, enhancing my ability to contribute to
            cross-functional teams.
          </Col>
        </Row>
        <br />
        <Row style={{ textAlign: "left" }}>
          <Col>
            <strong>Birgit Spaulding Fine Art Website | Freelance Website Development</strong>
            <br />
            July 2023
            <br />I developed the Birgit Spaulding Fine Art website, utilizing a Ruby on Rails backend and a React.js
            frontend. The site implements RESTful API conventions, features secure authenticated user profiles, and uses
            Cloudinary for image file management. I configured the PostgreSQL database, Rails backend, and React
            frontend for deployment via Render.
          </Col>
          <Col>
            <strong>Actualize Coding Bootcamp | Teaching Assistant</strong>
            <br />
            January 2023 - April 2023
            <br />
            As a Teaching Assistant at Actualize Coding Bootcamp, I closely collaborated with students learning
            full-stack web development. My responsibilities included reviewing assignments, coding and debugging
            assistance, hosting office hours, and participating in community-building events. I worked with the Lead
            Instructor to identify opportunities for student growth and encouraged progress for post-bootcamp learning.
          </Col>
          <Col>
            <strong>Making Waves Academy | Interventionist</strong>
            <br />
            October 2017 - July 2021
            <br />
            As an Interventionist at Making Waves Academy, I upgraded departmental documentation resources to streamline
            the compilation of academic and assessment data for over 50 students. Leveraging data, I created and
            delivered individualized lessons resulting in an 85% increase in the pass rate for historically
            low-performing students in English and math. I collaborated within a cross-functional team to identify and
            prioritize necessary support for my caseload of students.
          </Col>
        </Row>
      </Container>
    </div>
  );
}
