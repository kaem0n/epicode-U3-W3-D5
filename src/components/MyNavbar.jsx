import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Navbar from 'react-bootstrap/Navbar'

const MyNavbar = () => {
  return (
    <Col xs={2}>
      {/* alcuni tag li ho lasciati normali perché non c'è sovrapposizione diretta con i tag di React-Bootstrap */}
      <nav
        className="navbar navbar-expand-md fixed-left justify-content-between"
        id="sidebar"
      >
        <Container className="flex-column align-items-start">
          <Navbar.Brand href="index.html">
            <img
              src="assets/logo/logo.png"
              alt="Spotify Logo"
              width="131"
              height="40"
            />
          </Navbar.Brand>
          <Navbar.Collapse id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </a>
                </li>
                <li>
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </a>
                </li>
                <li>
                  <InputGroup className="mt-3">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <div className="input-group-append">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="h-100 input-group-append d-inline-block"
                      >
                        GO
                      </Button>
                    </div>
                  </InputGroup>
                </li>
              </ul>
            </div>
          </Navbar.Collapse>
        </Container>
        <div className="nav-btn">
          <Button className="signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="login-btn" type="button">
            Login
          </Button>
          <div>
            <a href="#">Cookie Policy</a> | <a href="#"> Privacy</a>
          </div>
        </div>
      </nav>
    </Col>
  )
}

export default MyNavbar
