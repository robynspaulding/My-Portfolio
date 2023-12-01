import React from "react";
import { Container, Row } from "react-bootstrap";
import PortfolioModal from "./portfolioModal"; // Import the PortfolioModal component

export function Portfolio() {
  return (
    <Container id="portfolio" style={{paddingTop: "50px", paddingBottom: "50px"}}>
      <h1>Portfolio:</h1>
      <br />
      <Row>
        <PortfolioModal
          title="Grow Together"
          imageSrc="images/GTcollage.png"
          link="https://github.com/robynspaulding/GrowTogether-backend"
          details={
            <div>
              <p style={{ marginBottom: "10px" }}>
                <strong>GrowTogether</strong> is an app that provides a platform for users to access resources that will
                help them learn about their child's development and document milestones in their children's lives from
                birth to Early Childhood. It includes the following features: <br /> Resources: Access educational
                resources to support your child's development. <br /> Milestone Tracker: Keep track of your child's
                milestones and development progress. <br /> Reminders: Set and receive reminders for important events or
                tasks related to your child's growth. <br /> Photo Album: Create a digital photo album to cherish and
                share precious moments in your child's life.
              </p>
              <p>
                <strong>Tech Stack:</strong> React, Bootstrap, Ruby on Rails, PostgreSQL, AWS S3 storage, Axios, Google
                Custom Search API, VS Code, Prettier, Github, HTML, CSS
              </p>
            </div>
          }
        />
        <PortfolioModal
          title="Birgit Spaulding Fine Art"
          imageSrc="images/gallery.png"
          link="https://birgit-spaulding-fine-art.onrender.com/"
          details={
            <div>
              <p style={{ marginBottom: "10px" }}>
                <strong>Birgit Spaulding Fine Art</strong> is a professional artist website. I created this site for a
                client with their input on styling and colors, which can all be customized in the index.css file. The
                goal of this site is to allow an artist to showcase their work by adding/editing images with the details
                and prices for each piece, list their past and future events, and allow patrons to contact the artist
                via email.
                <br />
                <strong>Tech Stack</strong> Deployed on Render, Ruby on Rails, Cloudinary, React.js, Axios, Bootstrap,
                React-Dom, React-Router-Dom, HTML, CSS
              </p>
            </div>
          }
        />
      </Row>
      <br />
      <Row>
        <PortfolioModal
          title="Where To Next?"
          imageSrc="images/TripsIndex.png"
          link="https://github.com/robynspaulding/where_to_next_react_frontend"
          details={
            <div>
              <p style={{ marginBottom: "10px" }}>
                <strong>Where To Next?</strong> is a travel planning app that allows users to plan their trips along
                with the places they want to see while they are on that trip. While looking at all the fun places to
                visit there is a search bar that accesses a third-party API called SerpApi which scrapes Google results
                based on your search query and location input. This way users can look up the fun local things to do
                while there without leaving the app!
                <br />
                <strong>Tech Stack</strong> React.js, Ruby on Rails, SerpAPI, Axios, React Date Picker, Moment.js, React
                Router, React Bootstrap, HTML, CSS
              </p>
            </div>
          }
        />
        <PortfolioModal
          title="YogiBear Booking"
          imageSrc="images/YogiBearIndex.png"
          link="https://github.com/robynspaulding/yogiBear_react"
          details={
            <div>
              <p style={{ marginBottom: "10px" }}>
                <strong>YogiBear Bookings</strong> is a booking website for Yoga instructors and students. Users can
                create an account and book a session with their favorite Yogi. A user can also see all the sessions they
                have booked. An Admin user can add or remove a Yoga instructor in the database, edit instructor
                information, and create bookings.
                <strong>Tech Stack</strong> Ruby on Rails, React.js, Axios, Bootstrap, React-Dom, React-Router-Dom,
                React-DatePicker, Moment.js, HTML, CSS
              </p>
            </div>
          }
        />
      </Row>
      <br />
      <Row>
        <PortfolioModal
          title="JSConstruction"
          imageSrc="images/JSC-image.png"
          link="https://github.com/robynspaulding/JSConstruction-React-frontend"
          details={
            <div>
              <p style={{ marginBottom: "10px" }}>
                <strong>JS Construction</strong> is a website for a general contractor where his customers can see his
                portfolio of jobs, what is available to purchase from his woodshop, and contact him through an EmailJS
                service to request quotes or discuss purchasing products.
                <strong>Tech Stack</strong> Ruby on Rails, React.js, Emailjs, Axios, React-Dom, HTML, CSS
              </p>
            </div>
          }
        />
        <PortfolioModal
          title="Thoughts&Things"
          imageSrc="images/BlogIndex.png"
          link="https://github.com/robynspaulding/personal-blog-frontend"
          details={
            <div>
              <p style={{ marginBottom: "10px" }}>
                <strong>Thoughts&Things</strong> is a simple blog website that allows a user to sign-up, login and
                create blog posts with a title, text, date, and image. Users can update and delete their posts when
                logged in, otherwise visitors can read the posts by selecting it and view it in a modal.
                <strong>Tech Stack</strong> React.js, Ruby on Rails, Axios, Bootstrap, HTML, CSS
              </p>
            </div>
          }
        />
      </Row>
    </Container>
  );
}
