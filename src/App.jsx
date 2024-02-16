import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './App.css'
import MyNavbar from './components/MyNavbar'
import { Container, Row } from 'react-bootstrap'
import Playerbar from './components/Playerbar'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import YourLibrary from './components/YourLibrary'
import SearchPage from './components/SearchPage'

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <MyNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/your-library" element={<YourLibrary />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
          <Playerbar />
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default App
