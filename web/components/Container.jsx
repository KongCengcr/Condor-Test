import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerStyled = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContainerStyled;
