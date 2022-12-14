import { Container, Nav, Navbar } from 'react-bootstrap';

function NbNavbar() {
    return (
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">NoteBag</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NbNavbar;