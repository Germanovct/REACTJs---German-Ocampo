import { Children } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function TextLinkExample() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Brand href="#home">Releases</Navbar.Brand>
        <Navbar.Brand href="#home">Bandcamp</Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          
            Signed in as: <a href="#login">German Ocampo</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;