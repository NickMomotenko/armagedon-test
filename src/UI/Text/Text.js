import React from "react";

import styled from "styled-components";

const TextWrapp = styled.div`
  font-size: ${(props) => props.fontSize || "16px"};
  color: #000000;

  font-weight: ${(props) => (props.bold ? "700" : "400")};
`;

const Text = ({ text, ...props }) => {
  return <TextWrapp {...props}>{text}</TextWrapp>;
};

export default Text;
