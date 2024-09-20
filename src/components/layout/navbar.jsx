import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/IWPlogo.png';


function CollapsibleExample() {

  
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#2b6777' }} variant="dark">
      <Container>
        <Navbar.Brand href="#home" style={{ color: '#ffffff', fontWeight: 'bold' }}>
          <img src={logo} alt='Indian Water Portals' style={{ height: '45px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" style={{ color: '#ffffff' }}>Home</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Contribute" id="collapsible-nav-dropdown" menuVariant="light" style={{ color: '#333' }}>
              <NavDropdown.Item href="#action/3.1" style={{ color: '#2b6777' }}>Event</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{ color: '#2b6777' }}>
                Article
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={{ color: '#2b6777' }}>Opportunity</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
