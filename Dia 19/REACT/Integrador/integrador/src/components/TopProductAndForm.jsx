import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Alert, Container } from "react-bootstrap";

function TopProductAndForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  }

  return (
    <>
      <Row className="TopProductAndForm">
        <Col className="topProduct">
          <Col>
            <Row>
              <img
                src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/4X2RHHKPDBDRFPD6AKE7T6IMZ4.jpeg"
                width="100%"
              />
            </Row>
          </Col>
          <Col>
            <h1>FREE FOR LIMITED TIME</h1>
            <p>
              The famous WARHAMMER: VERMINTIDE 2 is FREE on STEAM right now!
            </p>
            <a
              href="https://store.steampowered.com/app/552500/Warhammer_Vermintide_2/"
              target="_blank"
            >
              <Button variant="success">Go to site</Button>
            </a>
          </Col>
        </Col>

        <Col className="Form">
          <Form className="FormStyle" onSubmit={handleSubmit}>
            <p className="Title">Not a member? </p>
            <p className="Title">Sign up!</p>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
                placeholder="Enter name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
                placeholder="Enter email"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                name="phoneNumber"
                value={inputs.phoneNumber || ""}
                onChange={handleChange}
                placeholder="(555) 555-5555"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Suscribe for Newspaper" onClick={() => {console.log("Checkbox changed")}}/>
            </Form.Group>
            <Row>
              <Button variant="success" type="submit" className="SignUpButton">
                Sign up
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default TopProductAndForm;
