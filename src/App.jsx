import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './App.css'
import MyNavbar from './components/MyNavbar'
import { Container, Row } from 'react-bootstrap'
import Playerbar from './components/Playerbar'
import Home from './components/Home'

function App() {
  return (
    <Container fluid>
      <Row>
        <MyNavbar />
        <Home />
        <Playerbar />
      </Row>
    </Container>
  )
}

export default App
