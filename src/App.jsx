import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import MyNavbar from './components/MyNavbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Playerbar from './components/Playerbar'
import Home from './components/Home'
import YourLibrary from './components/YourLibrary'
import SearchPage from './components/SearchPage'
import NotFound from './components/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <Container fluid>
      <Row>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/your-library" element={<YourLibrary />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Playerbar />
      </Row>
    </Container>
  </BrowserRouter>
)

export default App
