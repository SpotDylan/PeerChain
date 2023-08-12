import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { ConnectButton } from "web3uikit";

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-5" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">PeerChain</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/papers">Papers</Nav.Link>
            <Nav.Link href="/review">Review</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <ConnectButton moralisAuth={false} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
