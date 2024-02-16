import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { saveQuery, saveSearch } from '../redux/actions'

const MyNavbar = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(saveQuery(inputValue))
    dispatch(saveSearch(inputValue))
  }

  return (
    <Col xs={2}>
      {/* alcuni tag li ho lasciati normali perché non c'è sovrapposizione diretta con i tag di React-Bootstrap */}
      <nav
        className="navbar navbar-expand-md fixed-left justify-content-between"
        id="sidebar"
      >
        <Container className="flex-column align-items-start">
          <Link to="/" className="navbar-brand" href="index.html">
            <img
              src="assets/logo/logo.png"
              alt="Spotify Logo"
              width="131"
              height="40"
            />
          </Link>
          <Navbar.Collapse id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <Link
                    to="/"
                    className="nav-item nav-link d-flex align-items-center"
                  >
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/your-library"
                    className="nav-item nav-link d-flex align-items-center"
                  >
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </Link>
                </li>
                <li>
                  <Link
                    to="/search"
                    className="nav-item nav-link d-flex align-items-center"
                  >
                    <i className="bi bi-search"></i>&nbsp; Search
                  </Link>
                </li>
                {location.pathname === '/search' && (
                  <li>
                    <Form onSubmit={handleSubmit}>
                      <InputGroup className="mt-3">
                        <FormControl
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                        />
                        <div className="input-group-append">
                          <Button
                            type="submit"
                            variant="outline-secondary"
                            size="sm"
                            className="h-100 input-group-append d-inline-block"
                          >
                            GO
                          </Button>
                        </div>
                      </InputGroup>
                    </Form>
                  </li>
                )}
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
