import { Nav, Navbar } from "react-bootstrap";

const SQLNavbar = () => {
  return (
    <Navbar bg="secondary" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link href="/">Listing</Nav.Link>
        <Nav.Link href="/createCard">Card erstellen</Nav.Link>
        <Nav.Link href="/createRecipe">Rezept erstellen</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default SQLNavbar;
