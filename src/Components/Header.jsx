import Home from "./Home"
import About from "./About"
import Error from "./Error"
import Footer from "./Footer"
import AllProducts from "./AllProducts"
import Test from "./Test"
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"

    import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BuyPage from "./BuyPage"
const Header = ()=>{
return<>

    {/* <BrowserRouter>
<ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="about">About</Link></li>
</ul>
    <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="about" element={<About/>}></Route>
<Route path="*" element={<Error/>}></Route>
    </Routes>
    </BrowserRouter> */}

{/* descendant  */}

            <BrowserRouter basename="/eCom/">
    <Navbar expand="lg" className="bg-body-tertiary" style={{position:"fixed",width:"100%"}}>
      <Container fluid>
        <Navbar.Brand><img src="/images/aliphStore.png" style={{height:"60px"}}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
           <Nav.Link> <Link to="/about">About</Link></Nav.Link>
           <Nav.Link> <Link to="/allProducts">AllProducts</Link></Nav.Link>
           <Nav.Link> <Link to="/test">Test</Link></Nav.Link>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="*" element={<Error/>}></Route>
                <Route path="/allProducts" element={<AllProducts/>}></Route>
                <Route path="/test" element={<Test/>}></Route>
                {/* <Route path="/buypage/:title/:price/:img" element={<BuyPage/>}></Route> */}
                <Route path="/buypage/:id" element={<BuyPage/>}></Route>
            </Routes>
           </BrowserRouter>

</>
}
export default Header