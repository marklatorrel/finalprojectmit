import React, { useState } from "react";
import { Row, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

function balanceDashboard() {
  return (
    <Container
      className="align-items-center justify-content-center"
      style={{ marginTop: "40px" }}
    >
      <Container
        style={{
          border: "2px solid gray",
          marginTop: "40px",
          backgroundColor: "#CFCCC8",
          borderRadius: 10,
        }}
      >
        <Row
          className="align-items-center justify-content-center"
          style={{ marginTop: "20px" }}
        >
          <h6>Your current balance is</h6>
        </Row>
        <Row className="align-items-center justify-content-center">
          <h3>$0.00</h3>
        </Row>
        <Row className="align-items-center justify-content-center">
          <b>586 reward points </b>
        </Row>
        <Row
          className="align-items-center justify-content-center"
          style={{
            marginBottom: "15px",
          }}
        >
          <p>USD account number: 129-24289-9531101 </p>
        </Row>
      </Container>
    </Container>
  );
}

export default balanceDashboard;
