import React, { useState } from "react";
import { Col, Modal, Button } from "react-bootstrap";

const PortfolioModal = ({ title, imageSrc, details, link }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenLink = () => {
    // Open the link in a new tab
    window.open(link, "_blank");
  };
  return (
    <Col>
      <div onClick={handleOpenModal} style={{ cursor: "pointer" }}>
        <img src={imageSrc} alt="" style={{ width: "600px" }} />
        <p style={{ textAlign: "center", marginTop: "10px" }}>{title}</p>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{details}</p>
          <img src={imageSrc} alt={title} style={{ width: "100%" }}></img>
          <br/>
          {link && (
            <Button variant="outline-primary" onClick={handleOpenLink}>
              View 
            </Button>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};

export default PortfolioModal;
