import React from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm.jsx";
import Navbar from "../components/Navbar.jsx";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  return (
    <>
      <Navbar />
      <Container>
        <LoginForm />
      </Container>
    </>
  );
};

export default Login;
