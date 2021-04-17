import React from "react";

import styled from "styled-components";

const ContainerWrapp = styled.div`
  margin: 0 auto;
  width: 900px;
  max-width: 100%;
`;

const Container = ({ children }) => {
  return <ContainerWrapp>{children}</ContainerWrapp>;
};

export default Container;
