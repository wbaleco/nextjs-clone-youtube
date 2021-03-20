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

const LoginPage = (props) => {
  return (
    <div>
      <div>
        <Jumbotron className="my-5 text-center">
          <h1 className="display-3">Informe seu usuário e senha!</h1>

          <hr className="my-2" />

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

export default LoginPage;
