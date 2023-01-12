import React from "react";
import ContainerStyled from "../components/Container.jsx";
import LoginForm from "../components/LoginForm.jsx";
import Layout from "./layout/Layout.jsx";

const Login = () => {
  return (
    <Layout>
      <ContainerStyled>
        <LoginForm />
      </ContainerStyled>
    </Layout>
  );
};

export default Login;
