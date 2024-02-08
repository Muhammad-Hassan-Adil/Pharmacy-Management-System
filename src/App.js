import React, { useState } from "react";
import { Button, Container, Row, Col, Card, Navbar, Nav, Form } from "react-bootstrap";
import AddMedicinePopup from "./AddMedicinePopup";
import CheckMedicinePopup from "./CheckMedicinePopup";
import UpdateMedicinePopup from "./UpdateMedicinePopup"; // Import the new component

const App = () => {
  const [showAddMedicinePopup, setShowAddMedicinePopup] = useState(false);
  const [showCheckMedicinePopup, setShowCheckMedicinePopup] = useState(false);
  const [showUpdateMedicinePopup, setShowUpdateMedicinePopup] = useState(false); // State variable for the "Update Medicine" popup

  const openAddMedicinePopup = () => {
    setShowAddMedicinePopup(true);
  };

  const handleCloseAddMedicinePopup = () => {
    setShowAddMedicinePopup(false);
  };

  const openCheckMedicinePopup = () => {
    setShowCheckMedicinePopup(true);
  };

  const handleCloseCheckMedicinePopup = () => {
    setShowCheckMedicinePopup(false);
  };

  const openUpdateMedicinePopup = () => {
    setShowUpdateMedicinePopup(true);
  };

  const handleCloseUpdateMedicinePopup = () => {
    setShowUpdateMedicinePopup(false);
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Pharmacy</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#pricing">Info</Nav.Link>
          <Nav.Link href="#contactus">Contact Us</Nav.Link>
        </Nav>
      </Navbar>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="https://source.unsplash.com/random/400x300?medicine" />
              <Card.Body className="p-3">
                <Card.Title>Add Medicine</Card.Title>
                <Card.Text>
                  Effortlessly add new medicines to your profile with just a
                  few clicks, ensuring your health records are always
                  up-to-date and comprehensive
                </Card.Text>
                <Button variant="primary" onClick={openAddMedicinePopup}>
                  Add Medicine
                </Button>
                <AddMedicinePopup
                  show={showAddMedicinePopup}
                  handleClose={handleCloseAddMedicinePopup}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="https://source.unsplash.com/random/400x300?pharmacy" />
              <Card.Body className="p-3">
                <Card.Title>Check Medicine</Card.Title>
                <Card.Text>
                  Quickly review and manage your medicine cards, gaining
                  instant insights into your prescribed medications for a
                  well-informed approach to your healthcare.
                </Card.Text>
                <Button variant="primary" onClick={openCheckMedicinePopup}>
                  Check Medicine
                </Button>
                <CheckMedicinePopup
                  show={showCheckMedicinePopup}
                  handleClose={handleCloseCheckMedicinePopup}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="https://source.unsplash.com/random/400x300?health" />
              <Card.Body className="p-3">
                <Card.Title>Update Medicine</Card.Title>
                <Card.Text>
                  Stay in control of your health journey by easily updating
                  medication details, ensuring accurate and timely information
                  for a personalized and effective care plan
                </Card.Text>
                <Button variant="primary" onClick={openUpdateMedicinePopup}>
                  Update Medicine
                </Button>
                <UpdateMedicinePopup
                  show={showUpdateMedicinePopup}
                  handleClose={handleCloseUpdateMedicinePopup}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row className="justify-content-between">
          <Col md={6}>
            <h3 className="text-left mb-4">Contact Information</h3>
            <p className="text-left">
              Pharmacy Management System, Inc.
              <br />
              123 Main Street, Suite 456
              <br />
              Anytown, USA 12345
              <br />
              Phone: (123) 456-7890
              <br />
              Email:{" "}
              <a href="mailto:info@pharmacymanagementsystem.com">
                info@pharmacymanagementsystem.com
              </a>
            </p>
          </Col>
          <Col md={4}>
            <h3 className="text-right mb-4">Subscribe to Our Newsletter</h3>
            <Form className="text-right">
              <Form.Group controlId="newsletterEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <hr className="my-5" />
    </div>
  );
};

export default App;
