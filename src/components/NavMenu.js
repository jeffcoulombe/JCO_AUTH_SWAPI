import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import User from '../auth/components/User';
import useSignout from "../auth/hooks/UseSignout";

const NavMenu = () => {

    const disconnect = useSignout();
    
    // Conditionner le code afin que disconnect ne s'affiche pas si
    // l'utilisateur n'est pas connecter

  return (
    <Container>
        <User />
        <Navbar>
        <Nav className="me-auto">
          <Nav.Link as={Button} onClick={disconnect}>
            Déconnexion
          </Nav.Link>
        </Nav>
      </Navbar>
      </Container>
  );
};

export default NavMenu;