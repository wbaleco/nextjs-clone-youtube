import Head from "next/head";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Jumbotron,
  Button,
} from "reactstrap";

const HomePage = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        light
        className="clearfix text-muted"
        style={{ background: "#ea8238" }}
        expand="md"
      >
        <NavbarBrand href="/">Dr. Beneficio</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto d-flex justify-content-center" navbar>
            {/* <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem> */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Cadastrar
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Cliente</DropdownItem>
                <DropdownItem>Serviços</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Sair</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Usuário Joelcio</NavbarText>
        </Collapse>
      </Navbar>
      <div>
        <Jumbotron className="my-5 text-center">
          <h1 className="display-3">Bem vindo ao Dr. Beneficio!</h1>
          <p className="lead">
            Mais de 240.000 pessoas beneficiadas em todo o Brasil
          </p>
          <hr className="my-2" />
          <p className="lead">Faça o login para acessar o sistema</p>
          <p className="lead">
            <Button href="/login" color="primary">
              Acessar
            </Button>
          </p>
        </Jumbotron>
      </div>
    </div>
  );
};

export default HomePage;
