import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "./../context/UserContext";
import { useNavigate } from "react-router-dom";
import CartTotal from "./CartTotal";

function NavBar() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link className="link whiteText" to="/">
            Pizzeria Mamma Mia
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="link whiteText" to="/">
              Home
            </Link>
            {user ? (
              <>
                <NavLink className="link whiteText" to="/profile">
                  Profile
                </NavLink>
                <Button variant="outline-light" onClick={handleLogout}>
                  Cerrar sesión
                </Button>
              </>
            ) : (
              <>
                <NavLink className="link whiteText" to="/login">
                  Login
                </NavLink>
                <NavLink className="link whiteText" to="/register">
                  Register
                </NavLink>
              </>
            )}
          </Nav>
          <Nav>
            <Link className="link whiteText" to="/cart">
              <CartTotal className="carrito" />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
