import React from "react";
import ContainerStyled from "../components/Container.jsx";
import LoginForm from "../components/LoginForm.jsx";
import Navbar from "../components/Navbar.jsx";

const Login = () => {
  return (
    <>
      <Navbar />
      <ContainerStyled>
        <LoginForm />
      </ContainerStyled>
    </>
  );
};

export default Login;
