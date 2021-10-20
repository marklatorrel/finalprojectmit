import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Navi() {
  const [underline, setUnderline] = useState("");

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip">{props}</Tooltip>
  );

  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <Navbar className="color-nav" variant="dark">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          id="home"
          onClick={() => setUnderline("homepage")}
        >
          Stratton Oakmont Bank
        </Navbar.Brand>

        <Nav className="me-auto">
          {!currentUser && (
            <Nav.Link
              as={Link}
              to="/signup/"
              id="signup"
              onClick={() => setUnderline("signup")}
            >
              Create account
            </Nav.Link>
          )}

          {!currentUser && (
            <Nav.Link
              as={Link}
              to="/login/"
              id="login"
              onClick={() => setUnderline("login")}
            >
              Log In
            </Nav.Link>
          )}
          {currentUser && (
            <Nav.Link
            style={{ color: "#FFFFFF" }}
              as={Link}
              to="/"
              id="name"
              onClick={handleLogout}
            >
              {currentUser.email}
            </Nav.Link>
          )}
          {currentUser && (
            <Nav.Link
              as={Link}
              to="/logout/"
              id="logout"
              onClick={handleLogout}
            >
              Log out
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navi;
